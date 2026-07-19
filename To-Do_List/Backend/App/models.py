from App import db
from datetime import datetime, timezone
from werkzeug.security import generate_password_hash, check_password_hash


class User(db.Model):
    """User information table"""

    __tablename__ = "users"

    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(200), nullable=False, unique=True)
    email = db.Column(db.String(200), nullable=False, unique=True)
    password = db.Column(db.String(300), nullable=False)
    profile = db.Column(db.String(300), default="image")

    tasks = db.relationship("Tasks", backref="user", cascade="all, delete-orphan")

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def get_password(self, password):
        return check_password_hash(self.password, password)


class Tasks(db.Model):
    """User tasks table"""

    __tablename__ = "tasks"

    task_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"), nullable=False)
    detail = db.Column(db.String(800))
    status = db.Column(db.String(200), default="incomplete")
    start_date = db.Column(
        db.Date, nullable=False, default=lambda: datetime.now(timezone.utc).date()
    )
