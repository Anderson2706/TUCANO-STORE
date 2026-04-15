const PRODUCTS_DB = [
    {
        id: "hbo-max",
        name: "HBO Max Premium",
        category: "Streaming",
        image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=500",
        variants: [
            { label: "1 Mês", price: 14.90, oldPrice: 34.90 },
            { label: "3 Meses", price: 39.90, oldPrice: 99.90 },
            { label: "12 Meses", price: 129.90, oldPrice: 349.90 }
        ]
    },
    {
        id: "netflix-4k",
        name: "Netflix 4K + HDR",
        category: "Streaming",
        image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=500",
        variants: [
            { label: "30 Dias", price: 19.90, oldPrice: 55.90 }
        ]
    },
    {
        id: "youtube-premium",
        name: "YouTube Premium",
        category: "Serviços",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=500",
        variants: [
            { label: "Individual", price: 12.50, oldPrice: 24.90 },
            { label: "Família", price: 22.00, oldPrice: 41.90 }
        ]
    }
];

export default PRODUCTS_DB;