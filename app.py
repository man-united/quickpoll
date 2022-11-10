from flask import Flask, request, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
from datetime import datetime
import os

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
#app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
db = SQLAlchemy(app)
CORS(app)

class Poll(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    question = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    
    def __repr__(self):
        return f'Question: {self.question}'
    
    def __init__(self, question):
        self.question = question
        
def format_poll(poll):
    return {
        'id': poll.id,
        'question': poll.question,
        'created_at': poll.created_at
    }

@app.route('/')
@app.route('/majority/')
@app.route('/preferential/')
@app.route('/proportional/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/poll/<id>/')
@cross_origin()
def poll(id):
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api')
@cross_origin()
def index():
    return {
        'message': "Hello"
    }
    
@app.route('/poll', methods=['POST'])
@cross_origin()
def create_poll():
    question = request.json['question']
    poll = Poll(question)
    db.session.add(poll)
    db.session.commit()
    return format_poll(poll)

if __name__ == '__main__':
    app.run()