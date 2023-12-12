```javascript
// src/utils/helpers.js

// Helper function to format a date string
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};

// Helper function to truncate a string
export const truncateString = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength) + '...';
};

// Helper function to capitalize the first letter of a string
export const capitalizeString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Helper function to check if a string is empty
export const isEmptyString = (str) => {
  return str.trim() === '';
};

// Helper function to validate an email address
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Helper function to validate a URL
export const isValidUrl = (url) => {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlRegex.test(url);
};
```
