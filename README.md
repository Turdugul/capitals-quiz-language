# Countries and Capitals Quiz

## **Description**

The **Countries and Capitals Quiz** is an interactive web application that challenges users to identify the capital cities of countries around the world. The game provides a fun and educational way to improve geographic knowledge while enjoying a responsive and user-friendly design. The application dynamically displays country flags and names, along with four multiple-choice capital options.

Users receive instant feedback on their selections:

- Correct answers are highlighted in green.
- Incorrect answers are highlighted in red.

The game tracks the number of correct and incorrect answers and displays the final score at the end, showing the correct answers out of the total questions. A restart option allows users to play again.

Additionally, users can choose between **English** and **Kyrgyz** language options for a more personalized experience.

## **Features**

- Displays country names and flags.
- Four multiple-choice options for each question.
- Immediate feedback on selected answers with color-coded buttons.
- Tracks and displays the total number of correct and incorrect answers.
- Displays the final score in terms of correct answers out of total questions.
- Language selection option for English and Kyrgyz.
- Responsive design using Tailwind CSS.
- Dark mode toggle using the `react-toggle-dark-mode` package.
- Accessible and visually appealing UI.

## **Tech Stack**

- **Frontend Framework:** React with Vite
- **Styling:** Tailwind CSS
- **TypeScript:** For type-safe development
- **Package Used:** `react-world-flags` for country flags

## **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/Turdugul/capitals-quiz-language.git
   
2. Navigate to the project directory:

   ```bash
   cd capitals-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## **Usage**

1. Start the game by viewing the displayed country and flag.
2. Choose one of the four capital city options.
3. Observe the immediate feedback (green for correct, red for incorrect).
4. Select your language option between English or Kyrgyz. 
5. View your final score after completing all questions, showing the number of correct answers out of the total questions.
6. Restart the game and try again!

## **Components**

### 1. **App**

- Main logic for the game.
- Handles state management and transitions between questions and results.

### 2. **Question**

- Displays the current country, flag, and multiple-choice options.
- Handles answer selection and applies feedback styles.

### 3. **Result**

- Shows the total number of correct and incorrect answers.
- Provides a restart button to replay the game.

### 4. **Final**
- Displays the final results after the quiz is completed.
- Shows the total number of correct answers out of the total questions.
- Allows the user to restart the quiz.

### 5. **ThemeToggle**

- Allows users to toggle between light and dark modes.

### 5. **LanguageToggle**

- Allows users to toggle between English and Kyrgyz languages.

## **Future Enhancements**
- Include regional or difficulty-based filtering options.
- Display additional information about countries (e.g., population, area).
- Add animations for smoother transitions.

---

Thank you for using the Countries and Capitals Quiz! Have fun learning about the world!

