from flask import Flask, render_template, request
from sklearn.ensemble import RandomForestClassifier
import pickle

app = Flask(__name__, template_folder='templates', static_folder='static', static_url_path='/')


with open('heart_model.pkl', 'rb') as f:
    model = pickle.load(f)



@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'GET':
        return render_template('form.html')
    elif request.method == 'POST':
        age = request.form.get('age')
        sex = request.form.get('sex')
        cp = request.form.get('cp')
        trestbps = request.form.get('trestbps')
        chol = request.form.get('chol')
        fbs = request.form.get('fbs')
        restecg = request.form.get('restecg')
        thalach = request.form.get('thalach')
        exang = request.form.get('exang')
        oldpeak = request.form.get('oldpeak')
        slope = request.form.get('slope')
        ca = request.form.get('ca')
        thal = request.form.get('thal')

        final_array = [[
            int(age),
            int(sex),
            int(cp),
            int(trestbps),
            int(chol),
            int(fbs),
            int(restecg),
            int(thalach),
            int(exang),
            float(oldpeak),
            int(slope),
            int(ca),
            int(thal)
        ]]

        result = model.predict(final_array)

        if result == 1:
            return render_template('bad_result.html')
        elif result == 0:
            return render_template('good_result.html')
    return None


@app.route('/good')
def good():
    return render_template('good_result.html')

@app.route('/bad')
def bad():
    return render_template('bad_result.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000 ,debug=True)
