export const data = {
    items:[
        { 
            id:1,
            title: 'Főoldal', 
            routerlink: '#home' ,
            hasChildren: false
        },
        { 
            id:2,
            title: 'Rólunk', 
            routerlink: '#about',
            open:false,
            hasChildren: false
        },
        { 
            id:3,
            title: 'Járműparkunk', 
            routerlink: '#trucks',
            open:false,
            hasChildren: false
        },
        { 
            id:4,
            title: 'Szolgáltatásaink', 
            routerlink: '#services',
            hasChildren: true,
            open:false,
            children:[
            {
                id:1,
                title: 'Szállítmányozás', 
                routerlink: '#transport',
                open:false,
                hasChildren: false,
            },
            {
                id:2,
                title: 'Autómosó', 
                routerlink: '#washing',
                open:false,
                hasChildren: false,
            },
            {
                id:3,
                title: 'Futómű beállítás és gumiszerelés', 
                routerlink: '#wheelalignment',
                open:false,
                hasChildren: false,
            },
            {
                id:4,
                title: 'Raktározás', 
                routerlink: '#warehousing',
                open:false,
                hasChildren: false,
            },
            ]
        },
        { 
            id:5,
            title: 'Partnereink', 
            routerlink: '#partners',
            open:false,
            hasChildren: false
        },
        { 
            id:6,
            title: 'Rólunk mondták', 
            routerlink: '#testimonials',
            open:false,
            hasChildren: false
        },
        { 
            id:7,
            title: 'Kapcsolat', 
            routerlink: '#contact',
            open:false,
            hasChildren: false
        },
        
      ],
}