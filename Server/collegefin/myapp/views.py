from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Student
from .serializers import StudentSerializer
import json
from django.http import JsonResponse
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
import numpy as np
import os
import joblib

HFS_path = os.path.join(settings.BASE_DIR, 'myapp', 'Habit_from_score.pkl')
SP_path = os.path.join(settings.BASE_DIR, 'myapp', 'score_predictor.pkl')

# Load models using joblib
HFS_model = joblib.load(HFS_path)
SP_model = joblib.load(SP_path)

@csrf_exempt
def add_student(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode("utf-8"))

            # Get input data safely
            Hour_studied = int(data.get("Hour_studied", 0))
            Attendance_Percentage = int(data.get("Attendance_Percentage", 0))
            parent = data.get("parent", "")
            Resources = data.get("Resources", "")
            Extracurricular = data.get("Extracurricular", False)
            sleep_hour = int(data.get("sleep_hour", 0))
            Motivational = data.get("Motivational", "")
            Internet = data.get("Internet", False)
            Teacher = data.get("Teacher", "")
            physical_activity = int(data.get("physical_activity", 0))
            Disability = data.get("Disability", False)
            gender = data.get("gender", "")
            sub1 = int(data.get("sub1", 0))
            sub2 = int(data.get("sub2", 0))
            sub3 = int(data.get("sub3", 0))

            # Prepare input for model
            X = np.array([[
                Hour_studied,
                Attendance_Percentage,
                sleep_hour,
                physical_activity,
                1 if parent == 'High' else 0,
                1 if parent == "LOW" else 0,
                1 if parent == "Medium" else 0,
                1 if Resources == "High" else 0,
                1 if Resources == "Medium" else 0,
                1 if Resources == "LOW" else 0,
                1 if not Extracurricular else 0,
                1 if Extracurricular else 0,
                1 if Motivational == "High" else 0,
                1 if Motivational == "LOW" else 0,
                1 if Motivational == "Medium" else 0,
                1 if not Internet else 0,
                1 if Internet else 0,
                1 if Teacher == "High" else 0,
                1 if Teacher == "Medium" else 0,
                1 if Teacher == "LOW" else 0,
                1 if not Disability else 0,
                1 if Disability else 0,
                1 if gender == "female" else 0,
                1 if gender == 'male' else 0,
            ]])

            prediction = float(SP_model.predict(X)[0])
            prediction=prediction+(Hour_studied/3)
            avg = (sub1 + sub2 + sub3) / 3

            if avg <= prediction:
                ans = "You are right on track"
                plan = None
            else:
                ans = "Needs improvement"
                should = HFS_model.predict([[avg]]).tolist()[0]
                keys = [
                    'Hours_Studied', 'Attendance', 'Sleep_Hours', 'Physical_Activity',
                    'Parental_Involvement_High', 'Parental_Involvement_Low',
                    'Parental_Involvement_Medium', 'Access_to_Resources_High',
                    'Access_to_Resources_Medium', 'Access_to_Resources_Low',
                    'Extracurricular_Activities_No', 'Extracurricular_Activities_Yes'
                ]
                should_dict = dict(zip(keys, should))

                plan = {
                    'Hours_Studied': should_dict.get('Hours_Studied', 0),
                    'Sleep_Hours': should_dict.get('Sleep_Hours', 0),
                    'Physical_Activity': should_dict.get('Physical_Activity', 0),
                    'Attendance': min(should_dict.get('Attendance', 90), 100)
                }

                # Resource recommendation
                resources = {
                    'HIGH': should_dict['Access_to_Resources_High'],
                    'MEDIUM': should_dict['Access_to_Resources_Medium'],
                    'LOW': should_dict['Access_to_Resources_Low'],
                }
                plan['RESOURCES_NEEDED'] = max(resources, key=resources.get)

                # Extracurricular recommendation
                plan['Extracurricular'] = 'YES' if should_dict['Extracurricular_Activities_Yes'] > \
                                            should_dict['Extracurricular_Activities_No'] else 'NO'

            return JsonResponse({
                "STATUS": "SUCCESSFUL",
                "Prediction_BY_AI": prediction,
                "Expected_BY_HIM": avg,
                "Answer": ans,
                "Should": plan
            })

        except Exception as e:
            return JsonResponse({
                "STATUS": "FAIL",
                "Message": str(e)
            })
