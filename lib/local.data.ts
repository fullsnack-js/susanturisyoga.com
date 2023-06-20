export interface IyengarClass {
    description: string
    title: string
    _id: string
    level: string
    classResources?:{
      title: string
      url:string
    }
  }

  export const IyengarClasses: IyengarClass[] = [
    {
        _id: "1",
        title: "Beginners/ Level 1",
        description: "Introductory beginner's classes for those new to yoga or to Iyengar Yoga, or for experienced students wanting to deepen their understanding of the fundamentals. The class emphasizes essential postures and movements in standing, seated, twisting, and forward bending poses. You will learn and improve inversions like Halasana (plow pose) and Sarvangasana (shoulder stand).",
        level: "1",
        classResources: {
            title:"Level 1 Home Practice Sequence",
            url:"https://iyengarnyc.org/wp-content/uploads/IYAGNY-L1-Iyengar-Yoga-Home-Practice-Sequence.pdf"
        }},
        {
            _id: "2",
            title: "General/ Level 2",
            description: "For continuing Iyengar students deeply familiar with standing poses and can hold Sarvangasana for at least 5 minutes. Level 2 builds upon and expands the teachings of Level 1. Classes emphasize awareness in action and incorporate Sanskrit names and philosophy terms. Pranayama, which is the study of the breathing process, is also introduced. Level 2 introduces new postures such as Sirsasana (headstand), Full Arm Balance, and Backbends, as well as deeper twists, forward extensions, and variations in the familiar Shoulderstand.",
            level: "2",
            classResources: {
                title: "Level 2 Home Practice Sequence",
                url:"https://iyengarnyc.org/wp-content/uploads/IYAGNY-L2-Iyengar-Yoga-Home-Practice-Sequence.pdf"
            },
        
    },
    {
        _id: "3",
        title: "Intermediate/ Level 3",
        description: "Considered an intermediate level, this is for students who have a minimum of 2 or more years of Iyengar yoga with a regular self practice. Readiness indicators include being able to hold sirsasana for an extended time, as well as perform Full Arm Balance and push up into Urdhva Dhanurasana independently. Experienced students are challenged with learning variations in Inversions and a variety of intermediate asanas.",
        level: "3",
       },
    {
        _id: "4",
        title: "Advanced/ Level 4",
        description: "For advanced students typically with 5+ years of Iyengar yoga experience with an established self practice. Readiness indicators include sustaining Sirsasana and Sarvangasana for 10 minutes, as well as being able to attempt variations of legs and arms in inversions.",
        level: "4",
        },

  ]