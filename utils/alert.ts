import { showMessage } from "react-native-flash-message";

export const showSuccess = (message: string) => {
  showMessage({
    message: "Success",
    description: message,
    type: "success",
    icon: "success",
    duration: 3000,
    style: {
      borderRadius: 8,
      marginTop: 20,
    },
    titleStyle: {
      fontSize: 16,
      fontWeight: "bold",
    },
    textStyle: {
      fontSize: 14,
    },
  });
};

export const showError = (message: string) => {
  showMessage({
    message: "Error",
    description: message,
    type: "danger",
    icon: "danger",
    duration: 4000,
    style: {
      borderRadius: 8,
      marginTop: 20,
    },
    titleStyle: {
      fontSize: 16,
      fontWeight: "bold",
    },
    textStyle: {
      fontSize: 14,
    },
  });
};

export const showInfo = (message: string) => {
  showMessage({
    message: "Info",
    description: message,
    type: "info",
    icon: "info",
    duration: 3000,
    style: {
      borderRadius: 8,
      marginTop: 20,
    },
    titleStyle: {
      fontSize: 16,
      fontWeight: "bold",
    },
    textStyle: {
      fontSize: 14,
    },
  });
};
