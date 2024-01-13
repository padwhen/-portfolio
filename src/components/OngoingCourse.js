import React from 'react';

const CourseCard = ({ title, link, estimatedFinishTime, description }) => {
  return (
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
      <h1 className='my-5 font-bold gap-[10px]'>
        <a target="_blank" href={link}>{title}</a>
        <h3 className='text-sm underline'>Estimated finished time: {estimatedFinishTime}</h3>
      </h1>
      <p className='text-sm -py-1 items-center' dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

const OngoingCourse = () => {
  const ongoingCourses = [
    {
      title: 'Back End Programming',
      link: 'https://opinto-opas.haaga-helia.fi/course_unit/SOF003AS3AE',
      estimatedFinishTime: 'May 2024',
      description: 'Teaches modern web application back-end development with <b>Spring Boot</b>, covering <b>server-side programming</b>, <b>database programming</b>, <b>Spring security</b>, <b>Spring REST</b>, <b>Junit testing</b>, and <b>deployment</b>.',
    },
    {
      title: 'Front End Programming',
      link: 'https://opinto-opas.haaga-helia.fi/course_unit/SOF004AS3AE',
      estimatedFinishTime: 'May 2024',
      description: 'Focusing on front-end technologies like <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>React.js</b>, and <b>back-end connectivity</b>.',
    },
    {
      title: 'Database Developer',
      link: 'https://opinto-opas.haaga-helia.fi/course_unit/SOF013AS3AE',
      estimatedFinishTime: 'May 2024',
      description: 'Emphasizing <b>physical database design</b>, <b>covering integrity</b>, <b>performance</b>, <b>indexes</b>, <b>concurrency</b>, <b>transactions</b>, <b>logging</b>, <b>recovery, backup, and security</b>.',
    },
    {
      title: 'Mobile Programming',
      link: 'https://opinto-opas.haaga-helia.fi/course_unit/SOF008AS3AE',
      estimatedFinishTime: 'May 2024',
      description: 'Teaches mobile programming with a focus on <b>Android platform basics</b>, selected mobile development technologies, and utilizing mobile device functionalities.',
    },
    {
      title: 'Software Testing',
      link: 'https://opinto-opas.haaga-helia.fi/course_unit/SOF012AS3AE',
      estimatedFinishTime: 'June 2024',
      description: 'Covers <b>software quality assurance and testing</b>, including <b>fundamentals</b>, <b>testing strategies</b>, <b>test case planning and implementation</b>, <b>evaluation of effectiveness and coverage</b>, and <b>automation skills</b> using relevant tools.',
    },
    {
      title: 'Cloud Service Technologies',
      link: 'https://opinto-opas.haaga-helia.fi/course_unit/ICI003AS3AE',
      estimatedFinishTime: 'May 2024',
      description: 'Covers basic <b>Cloud concepts</b> and general information, introducing foundational knowledge for <b>AWS Certified Cloud Practitioner or Microsoft Azure Fundamentals certifications</b>, with a focus on <b>public cloud economics, infrastructure, services, security, and governance</b>.',
    },
    {
      title: 'Full Stack Open - (Part 9 to 13)',
      link: 'https://fullstackopen.com/en/',
      estimatedFinishTime: 'February 2024',
      description: 'Covering <b>TypeScript</b>, <b>React Native</b>, <b>Continuous Integration / Continuous Delivery</b> systems, <b>containerizing</b> Node.js and React projects, and exploring <b>advanced Node.js with PostgreSQL</b>.',
    },
    {
      title: 'Data Structures & Algorithms III: AVL and 2-4 Trees, Divide and Conquer Algorithms',
      link: 'https://www.edx.org/learn/data-structures/the-georgia-institute-of-technology-data-structures-algorithms-iii-avl-and-2-4-trees-divide-and-conquer-algorithms?index=product&queryID=f85a59d0a894c32bf3e21ce8750c4283&position=6&results_level=second-level-results&term=Georgia+tech+data+structure&objectID=course-8b38cf01-e5fb-4e07-8d1e-eedcb37ae558&campaign=Data+Structures+%26+Algorithms+III%3A+AVL+and+2-4+Trees%2C+Divide+and+Conquer+Algorithms&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch',
      estimatedFinishTime: 'February 2024',
      description: 'Continuing to explore advanced data structures and sorting algorithms, with a focus on <b>AVL and 2-4 trees</b>.',
    },
    {
      title: 'Data Structures & Algorithms IV: Pattern Matching, Dijkstra’s, MST, and Dynamic Programming Algorithms',
      link: 'https://www.edx.org/learn/data-structures/the-georgia-institute-of-technology-data-structures-algorithms-iv-pattern-matching-dijkstras-mst-and-dynamic-programming-algorithms?index=product&queryID=f85a59d0a894c32bf3e21ce8750c4283&position=2&results_level=second-level-results&term=Georgia+tech+data+structure&objectID=course-c721c68b-6c24-4fe3-aa23-cce991d318be&campaign=Data+Structures+%26+Algorithms+IV%3A+Pattern+Matching%2C+Dijkstra%E2%80%99s%2C+MST%2C+and+Dynamic+Programming+Algorithms&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch',
      estimatedFinishTime: 'February 2024',
      description: 'Pursuing advanced studies in <b>pattern matching, Dijkstra’s algorithm, minimum spanning trees</b>, and <b>dynamic programming techniques</b> to further strengthen problem-solving and algorithmic skills.',
    },
    {
      title: 'DevOps with Kubernetes',
      link: 'https://devopswithkubernetes.com/',
      estimatedFinishTime: 'March 2024',
      description: 'Develop and release containerized applications on a <b>self-hosted cluster as well as use Google Kubernetes engine</b>, apply Kubernetes in <b>maintenance and updating of applications</b>, <b>use monitoring</b> with containerized applications, and explain <b>continuous deployment</b> and <b>implement deployment to Kubernetes.</b>',
    },
  ];

  return (
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Ongoing Courses</p>
      <p className='py-4'>// These are the courses I am learning in university / online with its short description and its estimated finish time.</p>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
        {ongoingCourses.sort((a, b) => new Date(a.estimatedFinishTime) - new Date(b.estimatedFinishTime)).map(course => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </div>
  );
};

export default OngoingCourse;
