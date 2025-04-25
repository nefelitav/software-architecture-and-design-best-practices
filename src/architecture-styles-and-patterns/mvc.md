# 1. MVC (Model-View-Controller) Pattern

## Description
The **Model-View-Controller (MVC)** pattern is a widely-used architectural pattern that separates an application into three main components:
- **Model**: Represents the application's data and business logic. It directly manages the data, logic, and rules of the application.
- **View**: Represents the UI elements, displaying data from the model to the user and allowing user interactions.
- **Controller**: Acts as an intermediary between the Model and View. It processes user input from the View and updates the Model accordingly, or updates the View based on changes in the Model.

MVC promotes separation of concerns, making it easier to manage, test, and maintain the code.

## Pros
**Separation of Concerns**: Divides the application into three distinct components, which makes code more modular, maintainable, and testable.

**Scalability**: The separation makes it easier to scale the application by updating the UI, logic, or data layers independently.

**Flexibility**: Different views can be created for the same model. This is particularly useful for applications with multiple user interfaces.

**Easier Maintenance**: Changes in the business logic can be made without affecting the presentation logic, making it easier to implement changes over time.