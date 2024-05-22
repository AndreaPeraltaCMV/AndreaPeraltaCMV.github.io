document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var countrySelect = document.getElementById('countrySelect');
    var categorySelect = document.getElementById('categorySelect');
    var exportPdfButton = document.getElementById('exportPdfButton'); // Nuevo elemento

    var events = [
        // Bolivia
            // Días feriados
            {
                title: 'Año Nuevo',
                start: '2024-01-01',
                description: 'Año Nuevo',
                country: 'bolivia',
                category: 'feriados'
            },
            {
                title: 'Día de la Fundación del Estado Plurinacional',
                start: '2024-01-22',
                description: 'Día de la Fundación del Estado Plurinacional',
                country: 'bolivia',
                category: 'feriados'
            },
            {
                title: 'Carnaval',
                start: '2024-02-12',
                end: '2024-02-14',
                description: 'Carnaval',
                country: 'bolivia',
                category: 'feriados'
            },
            {
                title: 'Viernes Santo',
                start: '2024-04-05',
                description: 'Viernes Santo',
                country: 'bolivia',
                category: 'feriados'
            },
            {
                title: 'Día del Trabajo',
                start: '2024-05-01',
                description: 'Día del Trabajo',
                country: 'bolivia',
                category: 'feriados'
            },
            {
                title: 'Corpus Christi',
                start: '2024-05-30',
                description: 'Corpus Christi',
                country: 'bolivia',
                category: 'feriados'
            },
            {
                title: 'Año Nuevo Andino Amazónico (Año Nuevo Aymara)',
                start: '2024-06-21',
                description: 'Año Nuevo Andino Amazónico (Año Nuevo Aymara)',
                country: 'bolivia',
                category: 'feriados'
            },
            {
                title: 'Aniversario Patrio (Día de la Independencia)',
                start: '2024-08-06',
                description: 'Aniversario Patrio (Día de la Independencia)',
                country: 'bolivia',
                category: 'feriados'
            },
            {
                title: 'Todos Santos (Día de los Difuntos)',
                start: '2024-11-02',
                description: 'Todos Santos (Día de los Difuntos)',
                country: 'bolivia',
                category: 'feriados'
            },
            {
                title: 'Navidad',
                start: '2024-12-25',
                description: 'Navidad',
                country: 'bolivia',
                category: 'feriados'
            },
            // Días no feriados
            {
                title: 'Carnaval de Oruro es Patrimonio Oral e Intangible de la Humanidad',
                start: '2024-02-24',
                end: '2024-02-26',
                description: 'Carnaval de Oruro es Patrimonio Oral e Intangible de la Humanidad',
                country: 'bolivia',
                category: 'feriados'
            },
            {
                title: 'Día del Padre',
                start: '2024-03-19',
                description: 'Día del Padre',
                country: 'bolivia',
                category: 'feriados'
            },
            {
                title: 'Día del Mar',
                start: '2024-03-23',
                description: 'Día del Mar',
                country: 'bolivia',
                category: 'feriados'
            },
            {
                title: 'Día de la Madre',
                start: '2024-05-27',
                description: 'Día de la Madre',
                country: 'bolivia',
                category: 'feriados'
            },
            {
                title: 'Día de la Salteña',
                start: '2024-11-10',
                description: 'Día de la Salteña',
                country: 'bolivia',
                category: 'feriados'
            },

        // Chile
            // Días feriados
            {
                title: 'Año Nuevo',
                start: '2024-01-01',
                description: 'Año Nuevo',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'Viernes Santo',
                start: '2024-03-29',
                description: 'Viernes Santo',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'Sábado Santo',
                start: '2024-03-30',
                description: 'Sábado Santo',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'Día del Trabajo',
                start: '2024-05-01',
                description: 'Día del Trabajo',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'Día de las Glorias Navales',
                start: '2024-05-21',
                description: 'Día de las Glorias Navales',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'Día de la Batalla de Arica (Arica y Paranicota)',
                start: '2024-06-07',
                description: 'Díá de la Batalla de Arica (Arica y Paranicota)',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'Día Nacional de los Pueblos Indígenas',
                start: '2024-06-20',
                description: 'Día Nacional de los Pueblos Indígenas',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'San Pedro y San Pablo',
                start: '2024-06-29',
                description: 'San Pedro y San Pablo',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'Día de la Virgen del Carmen',
                start: '2024-07-16',
                description: 'Día de la Virgen del Carmen',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'Día de la Asunción de la Virgen',
                start: '2024-08-15',
                description: 'Día de la Asunción de la Virgen',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'Natalicio de Bernardo O’Higgins (Chillán y Chillán Viejo)',
                start: '2024-08-20',
                description: 'Natalicio de Bernardo O’Higgins (Chillán y Chillán Viejo)',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'Día de la Independencia Nacional',
                start: '2024-09-18',
                description: 'Día de la Independencia Nacional',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'Día de las Glorias del Ejército',
                start: '2024-09-19',
                description: 'Día de las Glorias del Ejército',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'Viernes de las Fiestas Patrias',
                start: '2024-09-20',
                description: 'Viernes de las Fiestas Patrias',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'Día del Descubrimiento de Dos Mundos',
                start: '2024-10-12',
                description: 'Día del Descubrimiento de Dos Mundos',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'Día de las Iglesias Evangélicas y Protestantes',
                start: '2024-10-31',
                description: 'Día de las Iglesias Evangélicas y Protestantes',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'Día de Todos los Santos',
                start: '2024-11-01',
                description: 'Día de Todos los Santos',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'Día de la Inmaculada Concepción',
                start: '2024-12-08',
                description: 'Día de la Inmaculada Concepción',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'Navidad',
                start: '2024-12-25',
                description: 'Navidad',
                country: 'chile',
                category: 'feriados'
            },
            // Días no feriados
            {
                title: 'Aniversario del Golpe de Estado de 1973',
                start: '2024-09-11',
                description: 'Aniversario del Golpe de Estado de 1973',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'Día Nacional del Turismo',
                start: '2024-09-27',
                description: 'Día Nacional del Turismo',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'Día Nacional del Patrimonio Cultural',
                start: '2024-10-11',
                description: 'Día Nacional del Patrimonio Cultural',
                country: 'chile',
                category: 'feriados'
            },
            {
                title: 'Día de las Naciones Unidas',
                start: '2024-10-24',
                description: 'Día de las Naciones Unidas',
                country: 'chile',
                category: 'feriados'
            },

        // Colombia
            // Días feriados
            {
                title: 'Año Nuevo',
                start: '2024-01-01',
                description: 'Año Nuevo',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Día de Reyes',
                start: '2024-01-06',
                description: 'Día de Reyes',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Domingo de Ramos ',
                start: '2024-03-24',
                description: 'Domingo de Ramos ',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Día de San José',
                start: '2024-03-25',
                description: 'Día de San José',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Jueves Santo',
                start: '2024-03-28',
                description: 'Jueves Santo',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Viernes Santo',
                start: '2024-03-29',
                description: 'Viernes Santo',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Domingo de Resurrección',
                start: '2024-03-31',
                description: 'Domingo de Resurrección',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Día del Trabajo',
                start: '2024-05-01',
                description: 'Día del Trabajo',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Día del Ascensión',
                start: '2024-05-13',
                description: 'Día del Ascensión',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Corpus Christi',
                start: '2024-06-03',
                description: 'Corpus Christi',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Día del Sagrado Corazón',
                start: '2024-06-10',
                description: 'Día del Sagrado Corazón',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Día de San Pedro y San Pablo',
                start: '2024-07-01',
                description: 'Día de San Pedro y San Pablo',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Independencia de Nacional',
                start: '2024-07-20',
                description: 'Independencia de Nacional',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Batalla de Boyacá',
                start: '2024-08-07',
                description: 'Batalla de Boyacá',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Asunción de la Virgen',
                start: '2024-08-19',
                description: 'Asunción de la Virgen',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Día de la Raza',
                start: '2024-10-14',
                description: 'Día de la Raza',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Día de Todos los Santos',
                start: '2024-11-04',
                description: 'Día de Todos los Santos',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Independencia Cartagena',
                start: '2024-11-11',
                description: 'Independencia Cartagena',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Día de la Inmaculada Concepción',
                start: '2024-12-08',
                description: 'Día de la Inmaculada Concepción',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Navidad',
                start: '2024-12-25',
                description: 'Navidad',
                country: 'colombia',
                category: 'feriados'
            },
            
            // Días no feriados
            {
                title: 'Día de los Amigos',
                start: '2024-03-09',
                description: 'Día de los Amigos',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Día del Hombre',
                start: '2024-03-19',
                description: 'Día del Hombre',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Día del Niño',
                start: '2024-04-27',
                description: 'Día del Niño',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Día de la Madre',
                start: '2024-05-12',
                description: 'Día de la Madre',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Día del Padre',
                start: '2024-06-16',
                description: 'Día del Padre',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Día Nacional del Café',
                start: '2024-06-27',
                description: 'Día Nacional del Café',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Día de Amor y Amistad',
                start: '2024-09-21',
                description: 'Día de Amor y Amistad',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Black Friday',
                start: '2024-11-29',
                description: 'Black Friday',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Cyberlunes',
                start: '2024-12-02',
                description: 'Cyberlunes',
                country: 'colombia',
                category: 'feriados'
            },
            {
                title: 'Día de los Inocentes',
                start: '2024-12-28',
                description: 'Día de los Inocentes',
                country: 'colombia',
                category: 'feriados'
            },
        // Costa Rica
            // Días feriados
            {
                title: 'Año Nuevo',
                start: '2024-01-01',
                description: 'Año Nuevo',
                country: 'costarica',
                category: 'feriados'
            },
            {
                title: 'Día de San José',
                start: '2024-03-19',
                description: 'Día de San José',
                country: 'costarica',
                category: 'feriados'
            },
            {
                title: 'Jueves Santo',
                start: '2024-03-28',
                description: 'Jueves Santo',
                country: 'costarica',
                category: 'feriados'
            },
            {
                title: 'Viernes Santo',
                start: '2024-03-29',
                description: 'Viernes Santo',
                country: 'costarica',
                category: 'feriados'
            },
            {
                title: 'Día de Juan Santamaría',
                start: '2024-04-11',
                description: 'Día de Juan Santamaría (Héroe Nacional de la Batalla de Rivas)',
                country: 'costarica',
                category: 'feriados'
            },
            {
                title: 'Día del Trabajo',
                start: '2024-05-01',
                description: 'Día del Trabajo',
                country: 'costarica',
                category: 'feriados'
            },
            {
                title: 'Anexión del Partido de Nicoya a Costa Rica',
                start: '2024-06-25',
                description: 'Anexión del Partido de Nicoya a Costa Rica',
                country: 'costarica',
                category: 'feriados'
            },
            {
                title: 'Día de la Virgen de los Ángeles',
                start: '2024-08-02',
                description: 'Día de la Virgen de los Ángeles',
                country: 'costarica',
                category: 'feriados'
            },
            {
                title: 'Día de la Madre',
                start: '2024-08-15',
                description: 'Día de la Madre',
                country: 'costarica',
                category: 'feriados'
            },
            {
                title: 'Día de la Independencia',
                start: '2024-09-15',
                description: 'Día de la Independencia',
                country: 'costarica',
                category: 'feriados'
            },
            {
                title: 'Día de las Culturas',
                start: '2024-10-12',
                description: 'Día de las Culturas',
                country: 'costarica',
                category: 'feriados'
            },
            {
                title: 'Día de la Abolición del Ejército',
                start: '2024-12-01',
                description: 'Día de la Abolición del Ejército',
                country: 'costarica',
                category: 'feriados'
            },
            {
                title: 'Navidad',
                start: '2024-12-15',
                description: 'Navidad',
                country: 'costarica',
                category: 'feriados'
            },
            // Días no feriados
            {
                title: 'Llegada de los Reyes Magos',
                start: '2024-01-06',
                description: 'Llegada de los Reyes Magos',
                country: 'costarica',
                category: 'feriados'
            },
            {
                title: 'Festividades al Santo Cristo de Esquipulas',
                start: '2024-01-14',
                end: '2024-01-19',
                description: 'Festividades al Santo Cristo de Esquipulas en la ciudad de Santa Cruz, Guanacaste',
                country: 'costarica',
                category: 'feriados'
            },
            {
                title: 'Día del Amor y la Amistad «San Valentín»',
                start: '2024-02-14',
                description: 'Día del Amor y la Amistad «San Valentín»',
                country: 'costarica',
                category: 'feriados'
            },
            {
                title: 'Día del Padre',
                start: '2024-06-16',
                description: 'Día del Padre',
                country: 'costarica',
                category: 'feriados'
            },
            {
                title: 'Día Internacional del Negro',
                start: '2024-08-31',
                description: 'Día internacional del Negro. Se realiza gran desfile en la ciudad de Limón',
                country: 'costarica',
                category: 'feriados'
            },
            {
                title: 'Día de los Niños',
                start: '2024-09-09',
                description: 'Día de los Niños',
                country: 'costarica',
                category: 'feriados'
            },
            {
                title: 'Desfile de Faroles',
                start: '2024-09-14',
                description: 'Desfile de Faroles',
                country: 'costarica',
                category: 'feriados'
            },
            {
                title: 'Conmemoración próceres Mora y Cañas',
                start: '2024-09-30',
                description: 'Conmemoración próceres Mora y Cañas. Se realiza gran desfile en la ciudad de Puntarenas',
                country: 'costarica',
                category: 'feriados'
            },
            {
                title: 'Noche Buena',
                start: '2024-12-24',
                description: 'Noche Buena',
                country: 'costarica',
                category: 'feriados'
            },
        // Ecuador
        {
            title: 'Evento Ecuador 1',
            start: '2024-05-21',
            description: 'Descripción del Evento Ecuador 1',
            country: 'ecuador',
            category: 'noferiados'
        },
        {
            title: 'Evento Guatemala 1',
            start: '2024-05-22',
            description: 'Descripción del Evento Guatemala 1',
            country: 'guatemala',
            category: 'feriados'
        },
        {
            title: 'Evento México 1',
            start: '2024-05-20',
            description: 'Descripción del Evento México 1',
            country: 'mexico',
            category: 'noferiados'
        },
        {
            title: 'Evento Panamá 1',
            start: '2024-05-21',
            description: 'Descripción del Evento Panamá 1',
            country: 'panama',
            category: 'tecnologicos'
        },
        {
            title: 'Evento Perú 1',
            start: '2024-05-22',
            description: 'Descripción del Evento Perú 1',
            country: 'peru',
            category: 'deportivos'
        },
        {
            title: 'Evento Paraguay 1',
            start: '2024-05-22',
            description: 'Descripción del Evento Paraguay 1',
            country: 'paraguay',
            category: 'deportivos'
        },
        // Agrega más eventos según sea necesario
    ];

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'es',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        buttonText: {
            today: 'Hoy',
            month: 'Mes',
            week: 'Semana',
            day: 'Día',
        },
        events: filterEvents(['all'], ['all']),
        eventDidMount: function(info) {
            var category = info.event.extendedProps.category;
            if (category) {
                info.el.classList.add('category-' + category);
            }
            var country = info.event.extendedProps.country;
            if (country) {
                info.el.classList.add(country);
            }
            var flagUrl = `flags/${country}.png`;
            var flagImg = document.createElement('img');
            flagImg.src = flagUrl;
            flagImg.className = 'flag';
            info.el.prepend(flagImg);

            tippy(info.el, {
                content: info.event.extendedProps.description,
                placement: 'top',
                theme: 'light',
                arrow: true,
            });
        }
    });

    calendar.render();

    // Filtrar eventos según los países seleccionados y las categorías seleccionadas
    countrySelect.addEventListener('change', updateEvents);
    categorySelect.addEventListener('change', updateEvents);

    // Función para filtrar eventos por países y categorías
    function filterEvents(countries, categories) {
        if (countries.includes('all') && categories.includes('all')) {
            return events;
        } else if (countries.includes('all')) {
            return events.filter(function(event) {
                return categories.includes(event.category);
            });
        } else if (categories.includes('all')) {
            return events.filter(function(event) {
                return countries.includes(event.country);
            });
        } else {
            return events.filter(function(event) {
                return countries.includes(event.country) && categories.includes(event.category);
            });
        }
    }

    // Función para actualizar los eventos en el calendario según los filtros seleccionados
    function updateEvents() {
        var selectedCountries = Array.from(countrySelect.selectedOptions, option => option.value);
        var selectedCategories = Array.from(categorySelect.selectedOptions, option => option.value);
        calendar.removeAllEvents();
        calendar.addEventSource(filterEvents(selectedCountries, selectedCategories));
    }

    exportPdfButton.addEventListener('click', function() {
        var element = document.getElementById('calendar');
    
        // Clonar el elemento
        var clone = element.cloneNode(true);
    
        // Obtener las dimensiones reales del elemento
        var rect = element.getBoundingClientRect();
        var width = rect.width;
        var height = rect.height;
    
        // Configurar el tamaño del clon para que coincida con las dimensiones reales del elemento
        clone.style.width = width + 'px';
        clone.style.height = height + 'px';
    
        // Configurar el PDF
        var pdfConfig = {
            margin: [0.7, 1.25, 0.7, 1.25], // Márgenes generales
            filename: 'calendario.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true},
            jsPDF: { unit: 'in', format: 'letter' } // Orientación y formato de página automático
        };
    
        // Ajustar la orientación del PDF según las dimensiones del elemento
        if (width > height) {
            pdfConfig.jsPDF.orientation = 'landscape'; // Orientación horizontal si el ancho es mayor que la altura
        } else {
            pdfConfig.jsPDF.orientation = 'portrait'; // Orientación vertical en otros casos
        }
    
        // Generar y guardar el PDF
        html2pdf().from(clone).set(pdfConfig).save();
    });

    exportPdfButton.addEventListener('click', function() {
        var element = document.getElementById('calendar');
    
        // Clonar el elemento
        var clone = element.cloneNode(true);
    
        // Obtener las dimensiones reales del elemento
        var rect = element.getBoundingClientRect();
        var width = rect.width;
        var height = rect.height;
    
        // Configurar el tamaño del clon para que coincida con las dimensiones reales del elemento
        clone.style.width = width + 'px';
        clone.style.height = height + 'px';
    
        // Detectar si el dispositivo es móvil o no
        var isMobile = window.matchMedia("only screen and (max-width: 767px)").matches;
    
        // Configurar los márgenes según el dispositivo
        var margin;
        if (isMobile) {
            margin = [1.5, 2, 1, 2]; // Márgenes menores para móvil
        } else {
            margin = [0.7, 1.2, 0.7, 1.2]; // Márgenes para escritorio
        }
    
        // Configurar el PDF
        var pdfConfig = {
            margin: margin,
            filename: isMobile ? 'calendario_mobile.pdf' : 'calendario.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true},
            jsPDF: { unit: 'in', format: 'letter', orientation: isMobile ? 'portrait' : 'landscape' } // Orientación vertical para móvil y horizontal para escritorio
        };
    
        // Generar y guardar el PDF
        html2pdf().from(clone).set(pdfConfig).save();
    });    
      

    
});