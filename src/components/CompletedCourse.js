import React from 'react';

const CompletedCourse = () => {
  const CourseCard = ({ title, link, projectLink, description }) => {
    return (
      <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <h1 className='my-3 font-bold gap-[10px]'>
          <a target="_blank" href={link}>{title}</a>
          {projectLink && <a target='_blank' href={projectLink}><div className='underline'>Course's project</div></a>}
        </h1>
        <p className='text-sm -py-1 items-center' dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    );
  };

  return (
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Completed Courses</p>
        <p className='py-4'>// These are the courses I have completed in university / online and its short description.</p>
      </div>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
        <CourseCard
          title='Introduction to Software Development'
          link='https://opinto-opas.haaga-helia.fi/course_unit/SWD1TF001'
          description='Provides in-depth knowledge of software engineering, including key concepts and practical skills in <b>HTML5</b>, <b>CSS</b>, and <b>JavaScript</b>.'
        />
        <CourseCard
          title='Programming 1'
          link='https://opinto-opas.haaga-helia.fi/course_unit/SWD4TF032'
          projectLink='https://github.com/padwhen/JavaProjects/tree/main/Jdbcexercise'
          description='Covers basic <b>Java language</b> and <b>object-oriented programming concepts</b>, emphasizing small program design using IDEs.'
        />
        <CourseCard
          title='Programming 2'
          link='https://opinto-opas.haaga-helia.fi/course_unit/SWD4TF033'
          projectLink='https://github.com/padwhen/JavaProjects/tree/main/Jdbcexercise'
          description='Covers web application development with <b>Java for back-end</b> and <b>programmatic database access</b>.'
        />
        <CourseCard
          title='Software Requirement Analysis'
          link='https://opinto-opas.haaga-helia.fi/course_unit/SOF002AS2AE'
          description='Teaches software requirements analysis, emphasizing skills in <b>identifying business processes</b>, <b>defining project objectives</b>, and <b>using UML for modeling</b>.'
        />
        <CourseCard
          title='Data Management and Databases'
          link='https://opinto-opas.haaga-helia.fi/course_unit/SWD4TF003'
          description='Covers data management and databases, understanding of <b>concepts</b>, <b>relational databases</b>, <b>DBMS services</b>, <b>transactions</b>, <b>database design</b>, and <b>SQL proficiency</b>.'
        />
        <CourseCard
          title='Python Programming'
          link='https://opinto-opas.haaga-helia.fi/course_unit/SOF004AS2AE'
          description='Covers fundamental of <b>Python Programming</b>, with a focus on command-line application development.'
        />
        <CourseCard
          title='Data Structures & Algorithms I: ArrayLists, LinkedLists, Stacks and Queues'
          link='https://www.edx.org/learn/data-structures/the-georgia-institute-of-technology-data-structures-algorithms-i-arraylists-linkedlists-stacks-and-queues?index=product&queryID=f85a59d0a894c32bf3e21ce8750c4283&position=7&results_level=second-level-results&term=Georgia+tech+data+structure&objectID=course-5fda4000-8baf-4c1a-b6e6-840189eda463&campaign=Data+Structures+%26+Algorithms+I%3A+ArrayLists%2C+LinkedLists%2C+Stacks+and+Queues&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch'
          description='Demonstrated <b>Java proficiency</b>, excelling in key modules like <b>ArrayLists</b> and <b>Recursion</b>, <b>showcasing commitment to mastering data structures and algorithms</b>.'
        />
        <CourseCard
          title='Data Structures & Algorithms II: Binary Trees, Heaps, SkipLists and HashMaps'
          link='https://www.edx.org/learn/data-structures/the-georgia-institute-of-technology-data-structures-algorithms-ii-binary-trees-heaps-skiplists-and-hashmaps?index=product&queryID=f85a59d0a894c32bf3e21ce8750c4283&position=1&results_level=second-level-results&term=Georgia+tech+data+structure&objectID=course-6a5f3546-a974-4bcf-adf7-d9acb31c81b9&campaign=Data+Structures+%26+Algorithms+II%3A+Binary+Trees%2C+Heaps%2C+SkipLists+and+HashMaps&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch'
          description='<b>Advanced data structures and algorithms</b> expertise expanded through successful completion of coursework, including <b>binary trees</b>, <b>heaps</b>, <b>skips lists</b>, and <b>hash maps</b>.'
        />
        <CourseCard
          title='Full Stack Open - (Part 0 to 9)'
          link='https://fullstackopen.com/en/'
          projectLink='https://github.com/padwhen/fullstackopen'
          description='A course to modern web application development with <b>React</b>, emphasizing <b>building single-page applications with ReactJS</b>, <b>utilizing REST APIs</b> created with <b>Node.js</b>, <b>Express</b>, <b>MongoDB</b>, and incorporating <b>writing tests for both front-end and back-end</b>, along with exploring <b>Flux and Redux.</b>'
        />
      </div>
    </div>
  );
};

export default CompletedCourse;
