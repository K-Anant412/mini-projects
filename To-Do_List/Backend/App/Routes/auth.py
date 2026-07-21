from flask import Blueprint, request
from App import db
from App.models import User
from flask_jwt_extended import create_access_token
from datetime import timedelta
from App.Utils.Response import error_response, success_response

auth_route = Blueprint("auth", __name__)

@auth_route.route("/register", methods=["POST"])
def register():
    """
    User Registration Endpoint
    ---
    tags:
       - Authentication
    parameters:
       - in: body
         name: body
         required: true
         schema:
            type: object
            required:
                - name
                - email
                - password
            properties:
                name:
                    type: string
                    example: user_name
                email:
                    type: string
                    example: user@example.com
                password:
                    type: string
                    example: securPass123
    responses:
        201:
            description: User registered successfully
        400:
            description: Missing required fields
        409:
            description: Username or Email already registered
    """
    
    data = request.get_json()
    
    if ( 
        not data 
        or not data.get("name")
        or not data.get("email")
        or not data.get("password")
        ):
          return error_response("Missing required fileds")
      
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")
    
    if User.query.filter( (User.name == name) | (User.email == email) ).first():
        return error_response("User already exist", 409)
    
    try:
        new_user = User( name=name, email=email)
        new_user.set_password(password)
        
        db.session.add(new_user)
        db.session.commit()
        
        return success_response("Registration successfull", {"name":name, "email":email})
    except Exception as e:
        return error_response(str(e))
    
    
@auth_route.route("/login", methods=["POST"])
def login():
    """
    User Login Endpoint
    ---
    tags:
       - Authentication
    parameters:
       - in: body
         name: body
         required: true
         schema:
            type: object
            required:
                - email
                - password
            properties:
                email:
                    type: string
                    example: user@example.com
                password:
                    type: string
                    example: securPass123
    responses:
        201:
            description: User login successfully
        400:
            description: Missing required fields
        409:
            description: Username or Email already registered
    """
    
    data = request.get_json()
    
    if ( 
        not data
        or not data.get("email")
        or not data.get("password")
        ):
          return error_response("Missing required fileds")
      
    email = data.get("email")
    password = data.get("password")
    
    user = User.query.filter_by(email=email).first()
    
    
    if not user or not user.get_password(password):
        return error_response("invalid email or password")
    
    expires = timedelta(days=7)
    access_token = create_access_token(identity=str(user.user_id), expires_delta=expires)
    
    return success_response("User login successfull", {"name":user.name, "email":email, "access_token":access_token})