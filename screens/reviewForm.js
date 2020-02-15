import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/button";

const reviewSchema = yup.object({
  title: yup
    .string()
    .required()
    .min(4),
  body: yup
    .string()
    .required()
    .min(10),
  rating: yup
    .string()
    .required()
    .test(
      "is-range-1-5",
      "Must be a number 1 to 5",
      value => parseInt(value) < 6 && parseInt(value) > 0
    )
});

const ReviewForm = ({ addReview }) => {
  const initialValues = {
    title: "",
    body: "",
    rating: ""
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={reviewSchema}
      onSubmit={values => {
        addReview(values);
      }}
    >
      {props => (
        <View>
          <TextInput
            style={globalStyles.input}
            placeholder="Review title"
            onChangeText={props.handleChange("title")}
            value={props.values.title}
            onBlur={props.handleBlur("title")}
          />
          <Text style={globalStyles.errorMsg}>
            {props.touched.title && props.errors.title}
          </Text>

          <TextInput
            multiline
            style={globalStyles.input}
            placeholder="Review body"
            onChangeText={props.handleChange("body")}
            value={props.values.body}
            onBlur={props.handleBlur("body")}
          />
          <Text style={globalStyles.errorMsg}>
            {props.touched.title && props.errors.body}
          </Text>
          <TextInput
            style={globalStyles.input}
            placeholder="Review rating 1-5"
            onChangeText={props.handleChange("rating")}
            value={props.values.rating}
            keyboardType="numeric"
            onBlur={props.handleBlur("rating")}
          />
          <Text style={globalStyles.errorMsg}>
            {props.touched.title && props.errors.rating}
          </Text>

          <FlatButton title="submit" onPress={props.handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default ReviewForm;
