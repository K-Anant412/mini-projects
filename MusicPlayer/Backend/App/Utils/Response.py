def success_response( message, data=None, status_code=200):
    return {
        "success": True,
        "message": message,
        "data": data,
        "error": None
    }, status_code

def error_response( message, status_code=400, error_code=None):
    return {
        "success": False,
        "message": message,
        "error": error_code or "API Error",
        "data": None
    }, status_code