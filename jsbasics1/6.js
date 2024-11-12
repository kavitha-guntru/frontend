"use strict";

try {
  undeclaredVar = "This will cause an error"; // Throws an error because undeclaredVar is not declared
} catch (error) {
  console.log("Error:", error.message);
}
