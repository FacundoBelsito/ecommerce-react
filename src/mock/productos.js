const productos = [
    {
        id: '1',
        name: 'Clavos',
        stock: 100,
        precio: 5,
        descripcion: 'Los clavos de acero galvanizado son la opción perfecta para una variedad de aplicaciones de construcción, carpintería y bricolaje. Fabricados con acero de alta resistencia y recubiertos con galvanizado para una protección contra la corrosión, estos clavos ofrecen durabilidad y fiabilidad en cada proyecto. ',
        imagen: 'https://i.postimg.cc/FzMNbS4C/clavo-removebg-preview.png',
        categoria: 'materiales'
    },
    {
        id: '2',
        name: 'Tornillos',
        stock: 100,
        precio: 10,
        descripcion: 'El tornillo para madera de acero galvanizado es la solución perfecta para una amplia variedad de proyectos de carpintería y construcción. Fabricado con acero de alta calidad y recubierto con galvanizado para una protección superior contra la corrosión, este tornillo proporciona una sujeción segura y duradera en todo tipo de maderas, desde blandas hasta duras.',
        imagen: 'https://i.postimg.cc/LXysPh5G/tornill-removebg-preview.png',
        categoria: 'materiales'
    },
    {
        id: '3',
        name: 'Tuercas',
        stock: 100,
        precio: 5,
        descripcion: 'La tuerca de hierro corta es una pieza fundamental en cualquier proyecto de construcción, reparación o montaje que requiera unión de elementos con roscas. Fabricada con hierro de alta calidad, esta tuerca ofrece una excelente resistencia y durabilidad, asegurando una conexión sólida y segura, precio por unidad.',
        imagen: 'https://i.postimg.cc/FzdhJZ2J/tuerca-removebg-preview.png',
        categoria: 'materiales'
    },
    {
        id: '4',
        name: 'Arandelas',
        stock: 100,
        precio: 10,
        descripcion: 'Las arandelas de acero inoxidable son componentes esenciales en una amplia variedad de aplicaciones industriales, de construcción y de bricolaje. Fabricadas con acero inoxidable de alta calidad, estas arandelas ofrecen resistencia a la corrosión y durabilidad, asegurando una sujeción firme y duradera en cualquier proyecto.',
        imagen: 'https://i.postimg.cc/T2FdvzDj/arandela-removebg-preview.png',
        categoria: 'materiales'
    },
    {
        id: '5',
        name: 'Martillo',
        stock: 20,
        precio: 500,
        descripcion: 'Este martillo de carpintero es una herramienta esencial para cualquier aficionado o profesional de la carpintería. Fabricado con acero forjado de alta calidad, este martillo ofrece resistencia y durabilidad excepcionales para una variedad de tareas. Su mango ergonómico proporciona un agarre cómodo y seguro, permitiendo un manejo preciso y eficiente. Ya sea para clavar clavos, ajustar piezas o realizar trabajos de demolición, este martillo será tu compañero confiable en el taller.',
        imagen: 'https://i.postimg.cc/SsTkMPdk/martillo-removebg-preview.png',
        categoria: 'herramientas'
    },
    {
        id: '6',
        name: 'Destornillador',
        stock: 20,
        precio: 300,
        descripcion: 'El destornillador es una herramienta esencial para cualquier caja de herramientas. Con su punta magnética y resistente mango antideslizante, este destornillador proporciona un agarre seguro y facilita la manipulación de tornillos en una amplia variedad de aplicaciones. Ya sea para proyectos de bricolaje en el hogar, reparaciones eléctricas o trabajos de montaje, este destornillador te ayudará a realizar tu trabajo de manera eficiente y precisa.',
        imagen: 'https://i.postimg.cc/N0QcPtPQ/destornillador-removebg-preview.png',
        categoria: 'herramientas'
    },
    {
        id: '7',
        name: 'Pinza',
        stock: 20,
        precio: 500,
        descripcion: 'Las pinzas de acero inoxidable son herramientas indispensables para trabajos de precisión en electrónica, joyería, modelismo y más. Fabricadas con acero inoxidable de alta calidad, estas pinzas ofrecen resistencia a la corrosión y durabilidad a largo plazo. Su punta fina y precisa permite un agarre seguro y delicado de componentes pequeños, facilitando la manipulación y el montaje en proyectos detallados. Ya sea para ensamblar circuitos, colocar gemas o realizar reparaciones delicadas, estas pinzas te proporcionarán el control y la precisión que necesitas.',
        imagen: 'https://i.postimg.cc/vBHGDyW0/pinza-removebg-preview.png',
        categoria: 'herramientas'
    },
    {
        id: '8',
        name: 'Serrucho',
        stock: 20,
        precio: 600,
        descripcion: 'El serrucho de carpintero es una herramienta indispensable para cortes precisos y limpios en madera. Equipado con dientes afilados y endurecidos, este serrucho corta fácilmente a través de la madera con precisión y eficiencia. Su mango ergonómico de madera proporciona un agarre cómodo y seguro, permitiendo un control óptimo durante el corte. Ya sea para proyectos de construcción, trabajos de carpintería o reparaciones en el hogar, este serrucho te ayudará a lograr resultados profesionales en cada tarea.',
        imagen: 'https://i.postimg.cc/wBk66Mst/serrucho-removebg-preview.png',
        categoria: 'herramientas'
    },
    {
        id: '9',
        name: 'Amoladora',
        stock: 10,
        precio: 1000,
        descripcion: 'Una herramienta esencial para cortar, esmerilar y pulir metales y piedras. Con potencia y precisión, nuestra amoladora ofrece versatilidad y rendimiento en tus proyectos de construcción y bricolaje.',
        imagen: 'https://i.postimg.cc/L6Z2JN1F/mola-removebg-preview.png',
        categoria: 'herramientaselectricas'
    },
    {
        id: '10',
        name: 'Agujereadora',
        stock: 10,
        precio: 1500,
        descripcion: 'Perfora con facilidad y precisión en madera, metal y plástico con nuestra agujereadora eléctrica. Con un potente motor y diseño ergonómico, esta herramienta garantiza resultados profesionales en cada perforación.',
        imagen: 'https://i.postimg.cc/wvvdgVpP/agujereadora-removebg-preview.png',
        categoria: 'herramientaselectricas'
    },
    {
        id: '11',
        name: 'Atornilladora',
        stock: 10,
        precio: 2000,
        descripcion: 'Simplifica tus tareas de montaje y ensamblaje con nuestra atornilladora inalámbrica. Con un diseño compacto y potencia confiable, esta herramienta te permite atornillar con comodidad y precisión en cualquier lugar..',
        imagen: 'https://i.postimg.cc/JhKWfF9Z/anotornilladora-removebg-preview.png',
        categoria: 'herramientaselectricas'
    },
    {
        id: '12',
        name: 'Sierra circular',
        stock: 20,
        precio: 2500,
        descripcion: 'Corta con precisión madera y materiales compuestos con nuestra sierra circular. Equipada con un potente motor y hoja de corte afilada, esta herramienta proporciona cortes limpios y uniformes en una amplia variedad de aplicaciones.',
        imagen: 'https://i.postimg.cc/DfN7ftmc/sierra-removebg-preview.png',
        categoria: 'herramientaselectricas'
    },
    {
        id: '13',
        name: 'Casco',
        stock: 20,
        precio: 1000,
        descripcion: 'Protege tu cabeza de impactos y objetos en entornos de trabajo peligrosos con nuestro casco de seguridad ajustable. Ligero y resistente, este casco proporciona una protección confiable y cómoda durante todo el día.',
        imagen: 'https://i.postimg.cc/t43b5Jkr/casco-removebg-preview.png',
        categoria: 'elementosdeseguridad'
    },
    {
        id: '14',
        name: 'Gafas',
        stock: 20,
        precio: 1500,
        descripcion: 'Mantén tus ojos protegidos de partículas, salpicaduras y impactos con nuestras gafas de seguridad antiempañamiento. Con lentes de alta resistencia y diseño ergonómico, estas gafas garantizan una visión clara y segura en cualquier situación.',
        imagen: 'https://i.postimg.cc/J0smcQYJ/gafas-removebg-preview.png',
        categoria: 'elementosdeseguridad'
    },
    {
        id: '15',
        name: 'Guantes',
        stock: 20,
        precio: 2000,
        descripcion: 'Protege tus manos de cortes, abrasiones y productos químicos con nuestros guantes de protección resistentes. Fabricados con materiales duraderos y ergonómicos, estos guantes ofrecen comodidad y seguridad en entornos industriales y de construcción.',
        imagen: 'https://i.postimg.cc/t4QyWW3Z/guantes-removebg-preview.png',
        categoria: 'elementosdeseguridad'
    },
    {
        id: '16',
        name: 'Zapatos de seguridad',
        stock: 20,
        precio: 2500,
        descripcion: 'Mantén tus pies protegidos de impactos y objetos pesados con nuestros zapatos de seguridad con puntera de acero. Confeccionados con materiales resistentes y suela antideslizante, estos zapatos brindan seguridad y confort en entornos laborales exigentes.',
        imagen: 'https://i.postimg.cc/HnFmS7FN/zapatos-de-seguridad-removebg-preview.png',
        categoria: 'elementosdeseguridad'
    },
]

export const getProducts = () => {
    let error = false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject('Estamos efectuando problemas pruebe mas tarde')
            } else {
                resolve(productos)
            }
        }, 5000)
    })
}

export const getOneProduct = (id) => {
    let error = false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject('hubo un error')
            } else {
                let product = productos.find((item) => item.id === id)
                resolve(product)
            }
        }, 5000)
    })
}