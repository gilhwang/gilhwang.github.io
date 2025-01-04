---
title: Waste Classification using Deep Learning
description: Developed a deep learning model that classifies waste images into categories
id: 2
categories:
    - Python
    - PyTorch
    - Artificial Intelligence (AI)
    - Teamwork
    - Google Colab
icon: fa-solid fa-diagram-project
start_date: "January 2020"
end_date: "April 2020"
published: true
---

# Overview

The **Waste Classification Using Deep Learning** project classifies waste images into five categories using neural network: 
- Containers for Recycling
- Garbage
- Organics
- Paper for Recycling
- Paper coffee cups

This project is done as a team, with Faisal Hussaini and Insha Worliwalla. It is a course project for APS360 (Applied Fundamentals of Deep Learning).

# Motivation

![uoftwaste](../images/wasteclassification/uoftwaste.png)
(image from [Campus Waste Management by Reno Strano](https://oappa.ca/wp-content/uploads/2017/06/255-Campus-waste-management-Reno-Strano-UofT.pdf))

In University of Toronto St. George campus, wastes should be thrown into the trash bins that has five waste categories: garbage, containers, mixed papers, coffee cups and organics. With various types of categories, it may be tedious to correctly dispose wastes every time. As a result, this may cause inappropriate disposal of waste which has harmful for environment.

This project aims to develop a solution to the above problem by correctly classifying waste in University of Toronto campus using a neural network model.

# Neural Network Model

![nn-architecture](../images/wasteclassification/nnarchitecture.png)

The model mainly consists of two parts:
1. **ResNet-152 feature extractor**
2. **Classifier**

The ResNet-152 feature extractor produces embedding of input images, and the classifier classifies the image embedding into 5 categories. The model contains a total of 154 layers, which are 151 convoultional layers from the pre-trained ResNet-152 model, and the 3 fully connected layers for classification. The linear layers have 64 neurons in the first layer, 32 neurons in the second layer and 5 neurons in the last layer for output classes.

A few notes:
- The pre-trained ResNet-152 originally contains 152 layers, including 3 * 3 convolutional layers, 1 max pooling layer and 1 linear layer at the very end
- The pre-trained ResNet-152 was used as the feature extractor after removing the existing last linear layer from the pre-trained model.
- While training a dropout was applied, where the output of the first linear linear (among three) is randomly dropped with the specified probability (dropout rate). 

# Model Training

For training the neural network model, the following configuration/hyperparmeters was used:

| Configuration | Value |
| --- | --- |
| Optimizer | AdamW |
| Loss function | Cross Entropy |
| Learning rate | 0.0025 |
| Batch size | 256 |
| Number of Epochs | 30 |
| Dropout rate | 0.4 |
| Weight decay | 0.01 |

# Data Collection

The dataset was collected from 7 different sources
- 2527 images from a Kaggle dataset
- 15,500 images from a Kaggle dataset
- 23,600 images from a Kaggle dataset
- 300 images from Bing (using Bing Image Downloader python library)
- 3454 images from a Kaggle dataset
- 60 images downloaded from Google

Each dataset used different categories for classifying wastes. After retrieving the above datasets, the images were manually re-classified using the five categories defined for this project.

Then, the dataset was split into training (70%), validation (20%) and testing dataset (10%). The training dataset was used for model training, validation dataset was used for adjusting training hyperparameters and testing dataset was used for reporting model performance.

# Data Pre-processing

To increase the model performance, data augmentation was used. This technique applies various transformation to the existing training images in order to increase the dataset size and make the training more robust. In this project, one of the six transformations were applied randomly to each images:
1. Horizontal Flip
2. Grayscale
3. Crop
4. Invert
5. Rotation
6. Vertical Flip

![data-augmentation](../images/wasteclassification/dataaugmentation.png)

# Result

## Training & Validation Accuracy

![training-validation-accuracy](../images/wasteclassification/train_validation_accuracy.png)

Throughout training with 30 epochs, both training and validation accuracy steadily increases. The accuracy is measured as the total number of correct predictions divided by the total number of samples.

With the testing dataset, a final test accuracy of **84%** was achieved.

## F1 Score
The F1 score measures how accurate the model predicted each class. The F1 score is calculated by:

2 \* (precision \* recall) / (precision + recall)

The formula for calculating the precision and recall is from [Evaluating Deep Learning Models: The Confusion Matrix, Accuracy, Precision, and Recall](https://www.digitalocean.com/community/tutorials/deep-learning-metrics-precision-recall-accuracy), and the f1 score is from [F1 Score in Machine Learning: Intro & Calculation](https://www.v7labs.com/blog/f1-score-guide).

| Class | F1 Score |
| --- | --- |
| Organics | 0.9677 |
| Paper coffee cups | 0.8125 |
| Paper for recycling | 0.7079 |
| Container for recylcing | 0.6885 |
| Garbage | 0.6667 |

Among the five waste categories, the neural network model shows the best F1 score with Organics, and the worst F1 score with Garbage. A possible reasoning for this result would be that organics has a distinctive characteristics compared to other classes (e.g. banana is more distinctive than cardboard or coffee cups). Also, a reasoning for poor performance on garbage could be because garbage does not have a distinctive characteristic on its own because this is a generic category which means "any waste that is not organics, coffee cups, paper or containers".

Here is visual presentation of the model prediction based on 10 sample images. The predicted category is shown at the top of each image, and correctly classified images are marked with green borders.

![sample-prediction](../images/wasteclassification/sample_prediction.png)
