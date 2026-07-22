from flask import Blueprint, request
from App import db
from App.models import Tasks
from flask_jwt_extended import get_jwt_identity, jwt_required
from datetime import date
from App.Utils.Response import error_response, success_response

tasks_route = Blueprint("tasks", __name__)

@tasks_route.route("/create_task", methods=["POST"])
@jwt_required()
def create_task():
    """
    New Task Creation
    ---
    tags:
        - TasksManagement
    parameters:
        - in: body
          name: body
          required: true
          schema:
            type: object
            required:
                - detail
            properties:
                detail:
                    type: string
                    example: reading books
    security:
        - Bearer: []
    response:
        201:
            description: Task created successfully
        400:
            description: Missing required fields
        409:
            description: Task already existed
    """
    try:
        data = request.get_json(force=True)
        
        if not data or not data.get("detail"):
            return error_response("details required")
        
        task_details = data.get("detail").strip()
        start_date = date.today()
        
        current_user = int(get_jwt_identity())
        
        existing = Tasks.query.filter_by(
            user_id=current_user, detail=task_details
        ).first()
        if existing :
            return error_response("Task already exist")
        
        new_task = Tasks(detail=task_details, start_date=start_date, user_id=current_user)
        
        db.session.add(new_task)
        db.session.commit()
        
        return success_response("New task added", {"detail": task_details, "start": start_date})
    except Exception as e:
        return error_response(str(e))

    
@tasks_route.route("/show_tasks", methods=["GET"])
@jwt_required()
def show_task():
    """
    Get All Tasks
    ---
    tags:
        - TaskList
    security:
        - Bearer: []
    responses:
        200:
            description: A list of tasks
    """
    
    current_user = int(get_jwt_identity())
    
    task_list = Tasks.query.filter_by(user_id=current_user).all()
    all_tasks = []
    
    if not task_list:
        return error_response("Your task list is empty")   
    
    for task in task_list:
        all_tasks.append({
            "task_id": task.task_id,
            "user_id": task.user_id,
            "task_detail": task.detail,
            "start at": task.start_date
        })
        
    return success_response("Task List:", all_tasks)


@tasks_route.route("/update_task", methods=["PUT"])
@jwt_required()
def update_task():
    """
    Updating Existing Task
    ---
    tags:
        - TasksManagement
    parameters:
        - in: body
          name: body
          required: true
          schema:
            type: object
            required:
                - detail
                - task_id
            properties:
                detail:
                    type: string
                    example: reading books
                task_id:
                    type: int
                    example: 1
    security:
        - Bearer: []
    response:
        201:
            description: Task created successfully
        400:
            description: Missing required fields
        409:
            description: Task already existed
    """
    try:
        data = request.get_json(force=True)
        
        if not data or not data.get("detail"):
            return error_response("details required")
        
        current_user = int(get_jwt_identity())
        task_details = data.get("detail").strip()
        task_id = data.get("task_id")
        
        task = Tasks.query.filter_by(task_id=task_id, user_id=current_user).first()
        
        if not task:
            return error_response("task not found")
        
        task.detail = task_details
        
        db.session.commit()
        
        return success_response("Task updated")
    except Exception as e:
        return error_response(str(e))


@tasks_route.route("/remove_task", methods=["DELETE"])
@jwt_required()
def remove_task():
    """
    Removing Tasks
    ---
    tags:
        - TaskManagement
    parameters:
        - in: body
          name: body
          required: true
          schema:
            type: object
            required:
                - task_id
            properties:
                task_id:
                    type: int
                    example: 1
    security:
        - Bearer: []
    response:
        201:
            description: Task removed successfully
        400:
            description: Missing required fields
        409:
            description: Task already existed
    """
    try:
        data = request.get_json()
        current_user = int(get_jwt_identity())
        task_id = data.get("task_id")
        task = Tasks.query.filter_by(task_id=task_id,user_id=current_user).first()
        
        if not task:
            return error_response("task not found")
        
        db.session.delete(task)
        db.session.commit()
        
        return success_response("Task was successfully removed")
        
    except Exception as e:
        return error_response(str(e))