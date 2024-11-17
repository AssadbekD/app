from flask import Flask, jsonify

app = Flask(__name__)

resume_data = {
    "name": "Doskaliyev Assadbek",
    "email": "asadbekdoskaliev@gmail.com",
    "phone": "+7 (708) 2784528",
    "skills": ["Python", "Linux", "Docker", "PostgreSQL", "Machine Learning", "GCloud"],
    "education": "SDU - Information Systems (Expected 2026)",
}

@app.route('/api/resume', methods=['GET'])
def get_resume():
    return jsonify(resume_data)

if __name__ == '__main__':
    app.run(debug=True)
