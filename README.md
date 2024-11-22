# BehaViewer

## Description
https://github.com/AumkarMali/BehaViewerKNN

This project utilizes machine learning, specifically the HistGradientBoostingClassifier, to predict a user’s Internet Service Provider based on their demographic and device details. By training on a JSON dataset, the model learns to categorize users into specific groups based on key attributes. This can assist large organizations in making more informed economic decisions regarding their websites and products.

## Tech Stack

#### Programming Languages
* Python
* HTML
* CSS
* JavaScript


#### Libraries And Frameworks
* React
* CSS TailWind
* Json
* Flask 
* Panada (Panada.DataFrame)

## Functions

#### Main Function

The main function gets all  of the user data from the JSON file

#### Gradient Boosting Classifier Function

The gradientBoostingClassifier function uses HistGradientBoostingClassifier. The HistGradientBoostingClassifier is an advanced implementation of the Gradient boosting algorithm. This classifier is provided by the Scikit-Learn library and employs histogram-based techniques to enhance the efficiency and scalability of gradient boosting. Consequently, the `HistGradientBoostingClassifier` is particularly well-suited for large datasets. Gradient boosting models are widely used in various predictive modeling and machine learning tasks. While on one hand the GradientBoostingClassifiers struggle with large datasets due to high memory consumption. The HistGradientBoostingClassifier can manage large datasets with ease, making it more useful for big data applications.

## Web Development and Data

#### Flask App

a python web framework, was used as it provides useful tools and features allowing to create web applicaitons in python very easily.

#### Panadas.DataFrame

* The numeric features for the device brand and plan of each user is based on mappings which are created using the panda data frames.
* Feeding the user data to the panda data frames makes the predictions for the provider.
* The panda.DataFrame creates a chart using the data given, just like the example provided below from our database:

![Image1](https://github.com/user-attachments/assets/fdbb3d91-dda5-42dd-bf1d-6f5ef9a96612)



#### Data

* Feeding the user data to the panda data frames makes the predictions for the provider.
* A feature matrix is a grid that lists important product features and compares them to determine their relative value. The array "userDataQueries" serves as the feature matrix for the machine learning model. The classes (providers that the customer will choose) are what is being predicted.
* NaN represents missing or undefined data, which is handled by the HistGradientBoostingClassifier.
* New user data points are stored in JSON format, and the same mapping process is repeated with these data points. The predicted_class represents the prediction of what the new user point (also known as the new provider) will be.
* Predicted_provider gives the [0] provider. Meaning the 1st (top) provider will be given out of a list of possible providers.


## Installation
* Fork the project
* Clone the project
* Follow the instructions in the console
* Navigate to the project directory cd BehaViewer-FrontEnd-React
* Install the dependencies npm install
* Run the project npm run dev for the front-end
* Run the project dataFilter.py for the back-end









