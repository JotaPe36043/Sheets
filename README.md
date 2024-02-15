## 💻 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: JavaScript runtime environment. It's recommended to have the latest version installed to benefit from the latest features, improved performance, and security fixes.
  - [Node.js Installation](https://nodejs.org/)

## Dependencies

Ensure you have the following dependencies installed by running the provided commands:

1. **Initialize the project with default values for package.json**:
   ```sh
   npm init -y
   ```

2. **Install the google-spreadsheet library**:
   ```sh
   npm install google-spreadsheet
   ```

3. **Install the dotenv library**:
   ```sh
   npm install dotenv
   ```

4. **Install the google-auth-library package**:
   ```sh
   npm install google-auth-library
   ```
## Usage

Follow these steps to use the provided code in your `gradeCalculator` project:

1. **Configure Environment Variables**:
   - Copy the `.env.example` file and rename it to `.env`.
   - Ensure that you fill in the required environment variables (`CLIENT_EMAIL` and `PRIVATE_KEY`) with the appropriate values in the `.env` file. These variables are necessary for authentication with the Google APIs.

2. **Run the Code**:
   - Once the dependencies are installed and the necessary configurations are made, you can run the code. In your terminal, execute the `gradeCalculator.js` file.
   - For example, to run the script using Node.js, use the following command:
     ```sh
     node gradeCalculator.js
     ```

3. **Verify Output**:
   - After running the code, check your Google Sheets to verify that the grades have been calculated and written correctly. If the script runs successfully, you should see log messages indicating its progress, and the Google Sheets should be updated accordingly.

By following these steps, you should be able to use the code effectively to calculate grades based on the provided logic and update a Google Spreadsheet, with log messages indicating the script's progress and successful completion.
