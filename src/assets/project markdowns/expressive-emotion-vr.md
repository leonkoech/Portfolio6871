# Expressive Emotion VR
## Enhancing Emotional Expression through Personalized Chromotherapy in Virtual Reality

<table>
  <tr>
    <td>
      This project presents an innovative integration of chromotherapy within virtual reality (VR), utilizing brain-computer interfaces (BCIs) to tailor color experiences based on individual brain activity. This project combines the therapeutic principles of chromotherapy with real-time brain signal analysis to enhance emotional well-being.
    </td>
     <td>
       <img src="https://github.com/user-attachments/assets/7bd76e40-80cf-4e93-a292-17c7face4c4e" alt="Expressive Emoetion" width="1500px">
    </td>
  </tr>

</table>

## Inspiration

*"It is impossible to study society—social life, public life, religious life—without taking into consideration emotional backgrounds, how emotions are provoked, how emotions are expressed, how emotions are displayed."*

Current platforms for emotional tracking and management often fall short in providing a comprehensive solution for both detecting and expressing emotions. Our goal was to create a platform that not only identifies user emotions but also offers a therapeutic tool to alleviate stress. Art, a timeless medium for emotional expression, serves as the cornerstone of our solution.

*“Colors have certain biological and psychological effects on people, and I think it’s about time we start taking advantage of it” - Mohab Ibrahim, PhD, MD, associate professor of anesthesiology at the University of Arizona College of Medicine, Tucson*

In our exploration of chromotherapy, we found that identifying the most beneficial colors for individuals is complex due to the diverse factors influencing color perception and impact. By utilizing brain signals, we aimed to personalize and optimize this therapeutic approach.

## Functionality

Our project integrates Arctop’s cutting-edge Neuos technology (Muse BCI) with the Oculus Quest 2 to deliver an immersive, personalized experience. Neuos reads brain signals to tailor the VR environment, while the Oculus Quest 2 enables users to express themselves through color and movement.

## Development Process

We integrated Arctop's SDK to fetch brain signals via Neuos, which provides data on enjoyment, focus, and the "zone" at a rate of five calls per second. This data is transmitted to the cloud and monitored in real-time using Unity. We calibrate colors to correspond with levels of enjoyment at the start of each session. During the session, users’ emotional states are mapped to specific colors as they create art in a virtual environment featuring 3D objects that stimulate creativity.

### Data Collection and Analysis

The primary data collected includes three types of metrics: Enjoyment, Focus, and the Zone. These metrics are captured at a frequency of five times per second, providing granular insight into the user's emotional and cognitive state. The data is processed and analyzed to match specific colors to the user's enjoyment level, creating a dynamic and responsive chromotherapy experience.

### Brain-Computer Interface (BCI) Integration

The BCI component of this project is critical, as it allows for real-time interpretation of brain signals. This integration ensures that the VR environment is continually adapted to the user's current emotional state, enhancing the effectiveness of the chromotherapy. The use of BCIs in this context represents a significant advancement in personalized therapeutic applications within VR.

## Challenges Encountered

Our primary challenge was integrating Arctop's SDK due to its nascent stage and reliance on older Bluetooth technology. By collaborating with mentors and other developers, we overcame these obstacles and subsequently made our code open source to assist future developers facing similar issues.

## Achievements

We are proud of developing a functional prototype within a limited timeframe, particularly given that many team members were new to hackathons. Experienced participants successfully mentored newer members, facilitating a collaborative and productive environment.

## Lessons Learned

Through this project, we learned the importance of initial clear communication to establish a solid foundation. We effectively utilized individual skills by dividing tasks accordingly. Additionally, our collaborative efforts extended beyond our team, contributing to open-source solutions that benefit the wider developer community.

## Future Directions for Expressive Emotion VR

Given additional time and resources, we envision developing a companion app to enhance the user experience. This app would enable users to save their art and track their emotional trends over time, providing a comprehensive tool for emotional management and expression.

### Potential Applications and Impact

The integration of BCIs with chromotherapy in VR has far-reaching potential applications. It could be utilized in therapeutic settings to aid in the treatment of stress, anxiety, and other emotional disorders. Furthermore, the ability to track and analyze emotional trends over time could provide valuable insights for mental health professionals, leading to more personalized and effective treatment plans.

## Conclusion

This project demonstrates the potential of combining brain-computer interfaces with virtual reality to create personalized therapeutic experiences. By leveraging real-time brain signal analysis and chromotherapy, we have developed a tool that not only tracks but also enhances emotional well-being through creative expression. The success of this prototype lays the groundwork for further research and development in this promising field.
