# MapMe
## A Global Student Networking Platform

**MapMe** is a web application designed to foster connection among students from diverse cultural and academic backgrounds. Inspired by the multicultural environment at Florida International University (FIU), MapMe helps students discover peers with similar academic interests and cultural heritage, encouraging global collaboration.


## **Project Inspiration**

The concept for MapMe originated during Shellhacks at Florida International University, where students from across the globe—representing South America, Asia, Africa, and more—came together to code. Our team, hailing from Spain, Colombia, Venezuela, the Dominican Republic, and Kenya, was united by a shared passion for technology and computer science.

Recognizing the diversity at FIU and Miami’s role as a cultural hub, we envisioned a tool that could celebrate and showcase the variety of nationalities and academic disciplines at FIU. Our goal was to create a platform where students could connect based on shared interests, discover peers from similar backgrounds, and form a cohesive community.



## **Core Functionality**

MapMe is a dynamic web application designed to visualize a global student network on an interactive map. The platform allows students to add themselves to the map, filter by country or major, and view detailed profiles of their peers. The application aims to enhance student connectivity and community building across academic disciplines.

### **Key Features:**

- **Interactive Map**: Users can explore a map populated with photo markers representing students from diverse countries and academic backgrounds.
- **Profile Creation**: Students can add themselves to the map by filling out a form with their personal details, including name, major, country, and city. A photo upload feature allows users to personalize their profiles.
- **Filter Functionality**: The map offers filters to search by country, academic major, and more, helping students connect with others who share similar academic interests or cultural backgrounds.
- **Firebase Data Storage**: User data is stored securely in Firebase, making it accessible for future reference and ensuring smooth operation of the map.
- **Detailed Profiles**: Clicking on a marker reveals additional information about the student, including their name, major, country, and a photo.



## **Technological Stack**

### **Development Tools and Technologies:**
- **Frontend**: React.js for building the user interface, ensuring a responsive and seamless user experience.
- **Styling**: SCSS, utilizing mixins and variables to create maintainable and efficient styles.
- **Backend**: Firebase for user data storage and management.
- **APIs**:
  - **Google Maps API**: Used to embed and customize the interactive map.
  - **Google Geocoding and Places API**: Powers the location auto-completion feature, simplifying the process of entering countries and cities.
  - **FIU Majors API**: Provides a pre-populated list of academic majors, streamlining the process of selecting a major during profile creation.



## **Challenges Encountered**

### **Technical Hurdles**
1. **Custom Markers Implementation**: The integration of custom markers on Google Maps posed initial challenges, particularly due to compatibility issues with the [google-maps package](https://www.npmjs.com/package/google-maps). We resolved this by switching to the more robust and community-supported [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api), though custom marker documentation was not as clear as expected.
   
2. **Hosting with Next.js**: Deploying the application using Next.js presented difficulties, particularly with Firebase functions and the lack of clear error messages in the console. Despite extensive online documentation, deployment remained a challenging process.

3. **Skill Development**: Our team encountered a steep learning curve in areas such as GitHub usage (branching, project tracking), Firebase integration, and working with SCSS and Google Maps APIs. The learning process was demanding but ultimately rewarding.



## **Achievements and Milestones**

### **Noteworthy Accomplishments**
- **SCSS Implementation**: Mastered the use of SCSS for efficient styling, incorporating mixins and variables for maintainability.
- **Web App with Full CRUD Operations**: Successfully developed a web application with complete functionality, including user authentication, profile creation, and data filtering.
- **Team Collaboration**: Demonstrated effective teamwork and task management through clear communication, task assignment, and regular check-ins, ensuring that the project moved forward efficiently.



## **Key Takeaways**

### **Lessons Learned**
- **Deployment Best Practices**: Ensured that we had a deployable version of the application early in the project to avoid dependency issues later on.
- **GitHub Collaboration**: Gained experience with collaborative workflows using GitHub, including version control and managing code across multiple branches.
- **Prioritizing MVP**: Learned how to prioritize core features for a minimum viable product (MVP), which allowed us to focus on delivering essential functionality first.
- **TypeScript for Scalable Code**: Gained proficiency in using TypeScript for type-safe, scalable web applications.
- **API Integration**: Learned how to integrate third-party APIs like Google Maps and Firebase for data storage and map functionality.



## **Future Development Plans**

### **Roadmap for MapMe**
In the future, we plan to enhance the MapMe platform with additional features aimed at improving social connectivity and expanding user interaction:

- **Social Networking Features**: Introduce functionality for students to add friends, build networks, and connect with others directly through the platform.
- **Advanced Filters**: Add more filtering options, such as age range, academic year, and personal interests, to help users find relevant peers more easily.
- **Improved Image Uploads**: Enhance the photo upload feature by incorporating a built-in selfie button for users to capture and upload photos directly to their profiles.
- **UI/UX Improvements**: Redesign the side navigation bar to provide a more streamlined, aesthetically pleasing user experience.

