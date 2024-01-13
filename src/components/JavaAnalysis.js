import React from 'react'

const JavaAnalysis = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Java Analysis
        </p>
        <p className='pt-4'>
          Some of my Java projects
        </p>
        <div className='pt-4'>
        <h1 className='pt-4 text-3xl font-bold'>
            Web App (Java Backend + HTML/JavaScript Front End)
        </h1>
        <p className='text-xl pt-4'>
            Create multiple servlets for displaying user data from SQLite to the browser, using Java and Tomcat Web Server
        </p>
        <a href='https://github.com/padwhen/JavaProjects/tree/main/WebApp' target='_blank'>
            <h1 className='text-2xl underline pt-4'><b>Source Code</b></h1>    
        </a>
        </div>
        <div className='pt-4'>
        <h1 className='pt-4 text-3xl font-bold'>
            Sudoku
        </h1>
        <p className='text-xl pt-4'>
        Created a Java application capable of solving 9x9 Sudoku puzzles by employing a backtracking technique. This 
program can take an unsolved Sudoku grid as input, systematically insert numbers from 1 to 9, ensuring that no 
duplicates appear within rows, columns, or 3x3 subgrids.
        </p>
        <a href='https://github.com/padwhen/JavaProjects/tree/main/Sudoku' target='_blank'>
            <h1 className='text-2xl underline pt-4'><b>Source Code</b></h1>    
        </a>
        </div>
        <div className='pt-4'>
        <h1 className='pt-4 text-3xl font-bold'>
            Dictionary
        </h1>
        <p className='text-xl pt-4'>
        Developed a small Java application for a dictionary that loads word-meaning pairs from a text file, allows users to 
search for word meanings, and saves updated records to a new file.
Efficiently used a HashMap data structure for storage and retrieval of word definitions
        </p>
        <a href='https://github.com/padwhen/JavaProjects/tree/main/dictionary' target='_blank'>
            <h1 className='text-2xl underline pt-4'><b>Source Code</b></h1>    
        </a>
        </div>
        <div className='pt-4'>
        <h1 className='pt-4 text-3xl font-bold'>
            Bank Application
        </h1>
        <p className='text-xl pt-4'>
        The BankProgram Java class represents a simple banking application. It utilizes a console-based user interface to perform various banking operations such as listing accounts, adding accounts, depositing money, withdrawing money, and deleting accounts. Utilizing Object-Oriented Programming
        </p>
        <a href='https://github.com/padwhen/JavaProjects/tree/main/JavaBankApplication' target='_blank'>
            <h1 className='text-2xl underline pt-4'><b>Source Code</b></h1>    
        </a>
        </div>
        <div className='pt-4'>
        <h1 className='pt-4 text-3xl font-bold'>
            Password Generator
        </h1>
        <p className='text-xl pt-4'>
        Java Password Generator that utilizes randomization to generate secure passwords. The generator allows customization by specifying password length and choosing whether to include uppercase letters, lowercase letters, numbers, and special symbols. The code employs a Random object and string concatenation to construct passwords based on the selected criteria.
        </p>
        <a href='https://github.com/padwhen/JavaProjects/blob/main/PasswordGenerating/src/PasswordGenerator.java' target='_blank'>
            <h1 className='text-2xl underline pt-4'><b>Source Code</b></h1>    
        </a>
        </div>
        <div className='pt-4'>
        <h1 className='pt-4 text-3xl font-bold'>
            Words Per Minute (WPM)
        </h1>
        <p className='text-xl pt-4'>
        This Java program simulates a typing speed test. It starts with a countdown (3, 2, 1), then displays a random set of words. The user is prompted to type these words as quickly as possible. The program records the time taken and calculates the typing speed in words per minute (wpm). The set of words is predefined in the words array, and the program randomly selects words for each run. The TimeUnit.SECONDS.sleep(1) is used to create a delay between the countdown. The typing speed is calculated based on the number of characters typed and the time taken to type them. The result is displayed as words per minute.
        </p>
        <a href='https://github.com/padwhen/JavaProjects/blob/main/WordsPerMinute/src/Main.java' target='_blank'>
            <h1 className='text-2xl underline pt-4'><b>Source Code</b></h1>    
        </a>
        </div>
    </div>
    </div>
  )
}

export default JavaAnalysis