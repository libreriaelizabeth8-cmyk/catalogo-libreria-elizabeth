const productos = [
    { nombre: "Lapicero Trilux 032M", marca: "Faber-Castell", precio: 1.00, categoria: "Escritura y Dibujo", imagen: "trilux-faber.png" },
    { nombre: "Lapicero retráctil", marca: "Stabilo", precio: 3.00, categoria: "Escritura y Dibujo", imagen: "stabilo-retractil.png" },
    { nombre: "Lapicero retráctil BP-1RT", marca: "Pilot", precio: 2.50, categoria: "Escritura y Dibujo", imagen: "pilot-retractil.png" },
    { nombre: "Lapicero T.lìquida G1", marca: "Pilot", precio: 5.00, categoria: "Escritura y Dibujo" , imagen: "pilot-t-liq.png"},
    { nombre: "Lapicero borrable INKORRECT", marca: "Artesco", precio: 3.50, categoria: "Escritura y Dibujo", imagen: "lapicero-borrable.png"},
    { nombre: "Lápiz 2B", marca: "Artesco, Standford, Faber-Castell", precio: 1.00, categoria: "Escritura y Dibujo", imagen: "lapices.png" },
    { nombre: "Lápiz Chequeo", marca: "Artesco, Ove, Faber-Castell", precio: 1.50, categoria: "Escritura y Dibujo" , imagen: "lapiz-chequeo.png"},
    { nombre: "Lápiz Jumbo", marca: "Artesco, Ove", precio: 2.00, categoria: "Escritura y Dibujo" , imagen: "lapiz-jumbo.png"},
    { nombre: "Lápiz Chequeo Jumbo", marca: "Artesco, Ove", precio: 2.50, categoria: "Escritura y Dibujo", imagen: "lapiz-chequeo-jumbo.png" },
    { nombre: "Lápicero Pilot BP.S Fine", marca: "Pilot", precio: 3.00, categoria: "Escritura y Dibujo", imagen: "lapicero-pilot.png" },
    { nombre: "Plumon de pizarra delgado", marca: "Artesco, Layconsa", precio: 2.50, categoria: "Escritura y Dibujo", imagen: "plumones-pizarra-delgados.png" },
    { nombre: "Plumon de pizarra grueso ", marca: "Ove, Standford, Faber-Castell", precio: 3.00, categoria: "Escritura y Dibujo", imagen: "plumones-pizarra-gruesos.png" },
    { nombre: "Plumon de pizarra ", marca: "Mercyfan, Rovi's", precio: 2.00, categoria: "Escritura y Dibujo" , imagen: "plumones-pizarra-economico.png"},
    { nombre: "Marcador permanente/indeleble grueso", marca: "Prior", precio: 3.00, categoria: "Escritura y Dibujo", imagen: "marcador-permanente-prior.png"},
    { nombre: "Marcador permanente/indeleble grueso blanco", marca: "Prior", precio: 4.5, categoria: "Escritura y Dibujo", imagen: "marcador-blanco.png"},
    //faltan marcadores de otras marcas
    
    

    

    { nombre: "Paquete Hojas Bond 75gr", marca: "Milenium", precio: 13.00, categoria: "Papelería y Archivo", imagen:"papel-milenium.png" },
    { nombre: "Mica A-4", marca: "", precio:1.00 , categoria: "Papelería y Archivo", imagen:"mica-art.jpg" },
    { nombre: "Forro facil", marca: "", precio: 1.50, categoria: "Papelería y Archivo", imagen:"forro-facil.png" },
    { nombre: "Papel fotográfico", marca: "", precio:1.00 , categoria: "Papelería y Archivo", imagen:"papel-fotografico.png" },
    { nombre: "Papel adhesivo A-4", marca: "", precio: 0.80 , categoria: "Papelería y Archivo", imagen:"papel-adhesivo.png" },
    { nombre: "Cartulina hilo A-4", marca: "", precio:1.00 , categoria: "Papelería y Archivo", imagen:"cartulina-hilo-a4.png" },
    { nombre: "Sobre manila", marca: "", precio:1.00 , categoria: "Papelería y Archivo", imagen:"sobre-manila.png" },
    
    
    
    
    
    { nombre: "Goma en barra grande(40gr)", marca: "Artesco, Standford", precio: 4.50, categoria: "Adhesivos y Corte", imagen: "goma-en-barra.png" },
    { nombre: "Goma en barra pequeña(21gr)", marca: "Artesco, Ove", precio: 2.50, categoria: "Adhesivos y Corte", imagen: "goma-en-barra-pequeña.png" },
    { nombre: "Cinta de embalaje", marca: "Genérico", precio: 3.00, categoria: "Adhesivos y Corte", imagen: "cinta-adhesiva-gruesa.png" },
    { nombre: "Goma líquida 250ml", marca: "Artesco", precio: 5.00, categoria: "Adhesivos y Corte" , imagen: "goma-liq.art.png"},
    { nombre: "Silicono lìquida 250ml", marca: "Yimi", precio: 5.00, categoria: "Adhesivos y Corte" , imagen: "silicona-yimi.png"},
    //faltan siliconas 250ml de otras marcas
    { nombre: "Silicono lìquida 30ml", marca: "Ove", precio: 5.00, categoria: "Adhesivos y Corte" , imagen:"silicona-peq-ove.png"},
    //faltan siliconas medianas
    //corte xd
    { nombre: "Tijera economica", marca: "Decmas", precio: 1.00, categoria: "Adhesivos y Corte" , imagen: "tijera-economica.png"},
    { nombre: "Tijera escolar", marca: "Layconsa, Standford,Artesco", precio: 2.50, categoria: "Adhesivos y Corte" , imagen:"tijera-escolar.png"},
    { nombre: "Tijera escolar para zurdos", marca: "Artesco, Standford", precio: 4.00, categoria: "Adhesivos y Corte" , imagen:"tijera-zurdos.png"},
    { nombre: "Tijera con diseño", marca: "", precio: 3.50, categoria: "Adhesivos y Corte", imagen:"trilux-faber.png" },
    { nombre: "Tijera con diseño", marca: "", precio: 3.50, categoria: "Adhesivos y Corte" , imagen:"tijera-diseño.png"},

    
    { nombre: "Plastilina Jumbo 12 barras", marca: "Ove / Layconsa", precio: 6.00, categoria: "Arte y Manualidades", imagen: "plastilinas.png" },
    //faltan plastilinas de otras marcas
    
    { nombre: "Tajador con depósito de 1 orificio", marca: "Faber-Castell", precio: 2.00, categoria: "Oficina y Accesorios",  imagen: "tajador-con-deposito.png" },
    { nombre: "Tajador con depósito de 2 orificios", marca: "Maped", precio: 4.00, categoria: "Oficina y Accesorios", imagen: "tajador-maped.png" },
    //faltan tajadores de otras marcas
    { nombre: "Borrador", marca: "Artesco, Faber-Castell,etc", precio: 1.50, categoria: "Oficina y Accesorios", imagen: "borradores-grandes.png"},
    { nombre: "Borrador rojo/azul", marca: "Faber-Castell", precio: 1.50, categoria: "Oficina y Accesorios", imagen: "borradores-bicolor.png" },
    { nombre: "Corrector líquido", marca: "Artesco, Layconsa", precio: 2.50, categoria: "Oficina y Accesorios" , imagen: "corrector.png"},
    //correctores de otras marcas
    
];

export{productos};