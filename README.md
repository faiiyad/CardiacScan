# CardiacScan ❤💛🖤

<u>Table of Contents:

-[Getting Started](#how-it-works)

-[Training Method](#training-the-model)

-[Testing the model](#model-accuracy-precision-and-other-statistics)

-[Credits](#credits)

</u>


## How it works:

# [Link to the app!](https://cardiacscan.onrender.com/)
###### The app might take a minute to start, since I am using a free version of Render.

<img src="https://raw.githubusercontent.com/faiiyad/CardiacScan/refs/heads/main/images/all_heart.gif" width="300" alt="Heart GIF">


The app uses a machine learning model (RandomForestClassifier) to predict the likelihood of a heart disease in the user. A dataset containing previous patient's health records is used to train the model.


![Start button](https://raw.githubusercontent.com/faiiyad/CardiacScan/refs/heads/main/images/get_started_button.png)

Click the get started button, and fill in the form. Click the predict button, and the results will be shown.

**Known bugs**:
* To reset the app, the user has to click the predict button, and then click on the `CardiacScan` logo on the top-left of the navbar.
* In the results page, the `About` and `FAQ` buttons do not work for now. 


## Training the model:
The dataset was converted into a Pandas DataFrame object. All rows containing null values were removed. Then, the dataframe was split into training and testing samples using the 'train_test_split' function from the 'sklearn' library. A 'RandomForestClassifier' was then used with '150 estimators'. The trained model was then dumped into a `.pkl` format and saved for future use.

## Model accuracy, precision and other statistics:
The model, when tested on the testing dataset, resulted in a precision of `~87%`, an accuracy of `~88%` and had a recall score of `~83%`. 

![CM](https://raw.githubusercontent.com/faiiyad/CardiacScan/refs/heads/main/data_processing/cm_heart.png)

Also, during testing, I tried to find the leading feature that would indicate the presence of a heart disease, which turned out to be the maximum heart rate achieved, followed by the severity of chest pain in the patient. 
![IMP_FEATURES](https://raw.githubusercontent.com/faiiyad/CardiacScan/refs/heads/main/data_processing/imp_features.png)
###### All tests and graphics can be located in the `/data_processing` folder.


## Credits:
Dataset from: `https://archive.ics.uci.edu/dataset/45/heart+disease`

Original beating heart gif from: `https://toxicflame427.itch.io/`
