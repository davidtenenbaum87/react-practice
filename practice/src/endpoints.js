/*
  fetch(`http://localhost:5000/operations`)
    .then(res => res.json())
    .then(json => {
      let regex = /\/\w+\/;
      let endpoints = json.filter(j => regex.test(j.url));
      console.log(JSON.stringify(endpoints, undefined, 2));
    });
*/
const endpoints = [
  {
    name: 'Asshole',
    url: '/asshole',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Awesome',
    url: '/awesome',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Bag',
    url: '/bag',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Because',
    url: '/because',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Bucket',
    url: '/bucket',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Bye',
    url: '/bye',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Cool Story',
    url: '/cool',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Cup',
    url: '/cup',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Diabetes',
    url: '/diabetes',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Everyone',
    url: '/everyone',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Everything',
    url: '/everything',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Family',
    url: '/family',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Fascinating',
    url: '/fascinating',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Flying',
    url: '/flying',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'FYYFF',
    url: '/fyyff',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Give',
    url: '/give',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Fuck you and the horse you rode in on',
    url: '/horse',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Immensity',
    url: '/immensity',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Life',
    url: '/life',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Looking',
    url: '/looking',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Maybe',
    url: '/maybe',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Fuck Me',
    url: '/me',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'mornin',
    url: '/mornin',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'No',
    url: '/no',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Pink',
    url: '/pink',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Programmer',
    url: '/programmer',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Question',
    url: '/question',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Retard',
    url: '/retard',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: "That's fucking ridiculous",
    url: '/ridiculous',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'RTFM',
    url: '/rtfm',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'sake',
    url: '/sake',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Fuck This Shit',
    url: '/shit',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Single',
    url: '/single',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Thanks',
    url: '/thanks',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Fuck That',
    url: '/that',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Fuck This',
    url: '/this',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Too',
    url: '/too',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Tucker',
    url: '/tucker',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'What',
    url: '/what',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Zayn',
    url: '/zayn',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  },
  {
    name: 'Zero',
    url: '/zero',
    fields: [
      {
        name: 'From',
        field: 'from'
      }
    ]
  }
];

export default endpoints;
