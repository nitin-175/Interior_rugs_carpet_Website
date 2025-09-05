// Interior Rugs - Comprehensive E-Commerce Application

class InteriorRugsApp {
    constructor() {
        this.products = [];
        this.categories = [];
        this.filters = {};
        this.cart = [];
        this.wishlist = [];
        this.compareList = [];
        this.currentView = 'grid';
        this.currentSort = 'featured';
        this.currentCategory = null;
        this.searchQuery = '';
        this.filteredProducts = [];
        this.currentTestimonial = 0;
        this.testimonialInterval = null;
        
        this.init();
    }

    async init() {
        this.loadData();
        this.setupEventListeners();
        this.renderCategories();
        this.renderProducts();
        this.loadStoredData();
        this.updateCartCount();
        this.updateWishlistCount();
        this.updateCompareCount();
        this.initTestimonials();
        this.initBackToTop();
        this.showNotification('Welcome to Interior Rugs luxury collection!', 'success');
    }

    loadData() {
        // Categories data
        this.categories = [
            {
                id: "living-room",
                name: "Living Room Rugs",
                description: "Transform your living space with our premium collection of handcrafted rugs",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
                product_count: 24
            },
            {
                id: "bedroom",
                name: "Bedroom Rugs", 
                description: "Create a cozy sanctuary with our luxurious bedroom rug collection",
                image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop",
                product_count: 18
            },
            {
                id: "dining-room",
                name: "Dining Room Rugs",
                description: "Elegant dining rugs that complement your formal dining space",
                image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop",
                product_count: 16
            },
            {
                id: "outdoor",
                name: "Outdoor Rugs",
                description: "Weather-resistant luxury rugs for outdoor living spaces",
                image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
                product_count: 12
            },
            {
                id: "hallway",
                name: "Hallway Runners",
                description: "Long, elegant runners perfect for hallways and corridors",
                image: "https://images.unsplash.com/photo-1702675299379-1a584c7fe35f?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                product_count: 14
            },
            {
                id: "kids-room",
                name: "Kids Room Rugs",
                description: "Safe, playful, and educational rugs for children's spaces",
                image: "https://images.unsplash.com/photo-1505692795793-20f543407193?q=80&w=1139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                product_count: 20
            },
            {
                id: "office", 
                name: "Office Rugs",
                description: "Professional and sophisticated rugs for office environments",
                image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&h=600&fit=crop",
                product_count: 10
            },
            {
                id: "custom",
                name: "Custom Collections",
                description: "Bespoke rugs designed specifically for your unique requirements",
                image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop",
                product_count: 8
            }
        ];

        // Products data
        this.products = [
            {
                id: "persian-medallion-001",
                name: "Persian Heritage Medallion",
                category: "living-room",
                price: 650000,
                sale_price: null,
                rating: 4.9,
                reviews: 127,
                images: [
                    "https://plus.unsplash.com/premium_photo-1712016875220-36bd6b0c6628?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&fit=crop",
                    "https://images.unsplash.com/photo-1551298370-9c50423cc2c5?w=800&h=800&fit=crop"
                ],
                description: "An exquisite recreation of a 16th-century Persian palace carpet featuring intricate medallion design with flowing floral motifs. Handwoven by master artisans using traditional techniques.",
                features: ["Hand-knotted", "Museum Quality", "100% Silk", "Natural Dyes", "Lifetime Warranty"],
                specifications: {
                    material: "100% Mulberry Silk",
                    technique: "Hand-knotted Persian",
                    knot_density: "800 KPSI",
                    origin: "Isfahan, Persia Style",
                    thickness: "12mm",
                    backing: "Cotton foundation"
                },
                sizes: [
                    {size: "5x8 ft", price: 450000},
                    {size: "6x9 ft", price: 650000},
                    {size: "8x10 ft", price: 850000},
                    {size: "9x12 ft", price: 1200000}
                ],
                colors: ["Rich Burgundy", "Deep Navy", "Antique Gold", "Ivory"],
                care_instructions: "Professional cleaning recommended. Rotate periodically for even wear.",
                delivery_time: "18-24 months",
                in_stock: true
            },
            {
                id: "contemporary-geometric-002",
                name: "Modern Geometric Luxe",
                category: "living-room",
                price: 425000,
                sale_price: 380000,
                rating: 4.8,
                reviews: 89,
                images: [
                    "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&h=800&fit=crop",
                    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop"
                ],
                description: "Bold contemporary design featuring striking geometric patterns perfect for modern luxury interiors. Combines traditional craftsmanship with avant-garde aesthetics.",
                features: ["Hand-tufted", "Modern Design", "Silk & Wool Blend", "Custom Colors", "Stain Resistant"],
                specifications: {
                    material: "60% Silk, 40% New Zealand Wool",
                    technique: "Hand-tufted Modern",
                    knot_density: "400 KPSI",
                    origin: "Contemporary Design",
                    thickness: "15mm",
                    backing: "Canvas with latex"
                },
                sizes: [
                    {size: "4x6 ft", price: 280000},
                    {size: "6x9 ft", price: 425000},
                    {size: "8x10 ft", price: 580000},
                    {size: "10x14 ft", price: 920000}
                ],
                colors: ["Charcoal & Gold", "Navy & Silver", "Burgundy & Cream", "Custom"],
                care_instructions: "Vacuum regularly. Professional cleaning every 2-3 years.",
                delivery_time: "12-16 months",
                in_stock: true
            },
            {
                id: "vintage-overdyed-003",
                name: "Vintage Revival Collection",
                category: "living-room",
                price: 375000,
                sale_price: null,
                rating: 4.7,
                reviews: 156,
                images: [
                    "https://images.unsplash.com/photo-1534889156217-d643df14f14a?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&fit=crop",
                    "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&h=800&fit=crop"
                ],
                description: "Carefully distressed vintage-style rug with rich patina and sophisticated color palette. Perfect for adding character to contemporary or traditional spaces.",
                features: ["Overdyed Process", "Vintage Aesthetic", "Premium Wool", "Natural Aging", "Unique Patina"],
                specifications: {
                    material: "100% Premium Highland Wool", 
                    technique: "Traditional Overdyed",
                    knot_density: "300 KPSI",
                    origin: "Anatolian Style",
                    thickness: "10mm",
                    backing: "Cotton foundation"
                },
                sizes: [
                    {size: "5x7 ft", price: 285000},
                    {size: "6x9 ft", price: 375000},
                    {size: "8x11 ft", price: 520000},
                    {size: "9x12 ft", price: 685000}
                ],
                colors: ["Faded Burgundy", "Distressed Blue", "Antique Rose", "Weathered Gray"],
                care_instructions: "Gentle vacuuming. Spot clean with mild detergent.",
                delivery_time: "8-12 months",
                in_stock: true
            },
            {
                id: "bedroom-plush-004",
                name: "Cloud Nine Bedroom Luxury",
                category: "bedroom",
                price: 285000,
                sale_price: 255000,
                rating: 4.9,
                reviews: 203,
                images: [
                    "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=800&fit=crop",
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop",
                    "https://images.unsplash.com/photo-1551298370-9c50423cc2c5?w=800&h=800&fit=crop"
                ],
                description: "Ultra-soft and luxurious bedroom rug designed for comfort and elegance. Features deep pile construction for maximum softness underfoot.",
                features: ["Extra Plush", "Hypoallergenic", "Bamboo Silk", "Sound Dampening", "Easy Care"],
                specifications: {
                    material: "70% Bamboo Silk, 30% Merino Wool",
                    technique: "Hand-tufted Plush",
                    knot_density: "350 KPSI",
                    origin: "Luxury Bedroom Collection",
                    thickness: "20mm",
                    backing: "Anti-slip latex"
                },
                sizes: [
                    {size: "4x6 ft", price: 185000},
                    {size: "5x8 ft", price: 285000},
                    {size: "6x9 ft", price: 385000},
                    {size: "8x10 ft", price: 525000}
                ],
                colors: ["Champagne", "Soft Gray", "Blush Pink", "Cream White"],
                care_instructions: "Regular vacuuming with soft brush. Professional cleaning annually.",
                delivery_time: "6-10 months",
                in_stock: true
            },
            {
                id: "dining-formal-005", 
                name: "Formal Dining Elegance",
                category: "dining-room",
                price: 485000,
                sale_price: null,
                rating: 4.8,
                reviews: 94,
                images: [
                    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=800&fit=crop",
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop",
                    "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&h=800&fit=crop"
                ],
                description: "Sophisticated dining room rug with traditional motifs and formal elegance. Stain-resistant treatment perfect for dining environments.",
                features: ["Stain Resistant", "Formal Design", "Easy Clean", "Durable Construction", "Traditional Motifs"],
                specifications: {
                    material: "80% Wool, 20% Silk Highlights",
                    technique: "Hand-knotted Traditional",
                    knot_density: "450 KPSI",
                    origin: "Classical Persian Style",
                    thickness: "12mm",
                    backing: "Cotton with stain guard"
                },
                sizes: [
                    {size: "6x9 ft", price: 385000},
                    {size: "8x10 ft", price: 485000},
                    {size: "9x12 ft", price: 685000},
                    {size: "10x14 ft", price: 925000}
                ],
                colors: ["Deep Burgundy", "Forest Green", "Royal Navy", "Antique Gold"],
                care_instructions: "Immediate spill cleanup. Professional cleaning recommended.",
                delivery_time: "10-14 months",
                in_stock: true
            },
            {
                id: "outdoor-weather-006",
                name: "Weather Master Outdoor",
                category: "outdoor",
                price: 185000,
                sale_price: 165000,
                rating: 4.6,
                reviews: 78,
                images: [
                    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=800&fit=crop",
                    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop"
                ],
                description: "Premium outdoor rug designed to withstand all weather conditions while maintaining luxury aesthetics. Perfect for patios, decks, and outdoor dining areas.",
                features: ["Weather Resistant", "UV Protected", "Mold & Mildew Resistant", "Quick Dry", "Fade Resistant"],
                specifications: {
                    material: "100% Solution-Dyed Polypropylene",
                    technique: "Machine-woven Outdoor",
                    knot_density: "200 KPSI",
                    origin: "Outdoor Luxury Collection",
                    thickness: "8mm",
                    backing: "Waterproof synthetic"
                },
                sizes: [
                    {size: "5x7 ft", price: 125000},
                    {size: "6x9 ft", price: 185000},
                    {size: "8x10 ft", price: 265000},
                    {size: "9x12 ft", price: 345000}
                ],
                colors: ["Ocean Blue", "Terracotta", "Forest Green", "Natural Beige"],
                care_instructions: "Hose clean or pressure wash. Air dry completely.",
                delivery_time: "4-6 weeks",
                in_stock: true
            },
            {
                id: "hallway-runner-007",
                name: "Grand Hallway Runner",
                category: "hallway", 
                price: 325000,
                sale_price: null,
                rating: 4.7,
                reviews: 112,
                images: [
                    "https://images.unsplash.com/photo-1597665863042-47e00964d899?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1551298370-9c50423cc2c5?w=800&h=400&fit=crop"
                ],
                description: "Elegant hallway runner featuring continuous traditional patterns. Perfect length and width proportions for grand hallways and long corridors.",
                features: ["Extra Long", "Continuous Pattern", "Non-slip Backing", "High Traffic Durability", "Custom Lengths"],
                specifications: {
                    material: "90% Wool, 10% Silk Accents",
                    technique: "Hand-knotted Runner",
                    knot_density: "400 KPSI",
                    origin: "Traditional Runner Collection",
                    thickness: "10mm",
                    backing: "Cotton with grip strips"
                },
                sizes: [
                    {size: "2.5x8 ft", price: 185000},
                    {size: "2.5x10 ft", price: 225000},
                    {size: "2.5x12 ft", price: 275000},
                    {size: "2.5x15 ft", price: 325000}
                ],
                colors: ["Classic Red", "Royal Blue", "Emerald Green", "Antique Ivory"],
                care_instructions: "Regular vacuuming along the grain. Professional cleaning every 2 years.",
                delivery_time: "8-12 months", 
                in_stock: true
            },
            {
                id: "kids-educational-008",
                name: "Learning Adventure Kids Rug",
                category: "kids-room",
                price: 125000,
                sale_price: 110000,
                rating: 4.9,
                reviews: 267,
                images: [
                    "https://plus.unsplash.com/premium_photo-1661876306620-f2f2989f8f8b?q=80&w=1084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop",
                    "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=800&fit=crop"
                ],
                description: "Educational and fun kids rug featuring interactive learning elements. Safe, non-toxic materials with easy-care properties perfect for children's play areas.",
                features: ["Educational Design", "Non-toxic Materials", "Stain Resistant", "Easy Clean", "Safety Certified"],
                specifications: {
                    material: "100% Organic Cotton",
                    technique: "Flat-weave Safe",
                    knot_density: "150 KPSI",
                    origin: "Kids Safety Collection",
                    thickness: "6mm",
                    backing: "Natural latex non-slip"
                },
                sizes: [
                    {size: "4x6 ft", price: 85000},
                    {size: "5x7 ft", price: 125000},
                    {size: "6x8 ft", price: 165000},
                    {size: "8x10 ft", price: 245000}
                ],
                colors: ["Rainbow Bright", "Ocean Adventure", "Safari Explorer", "Space Journey"],
                care_instructions: "Machine washable on gentle cycle. Air dry recommended.",
                delivery_time: "2-4 weeks",
                in_stock: true
            }
        ];

        // Filters data
        this.filters = {
            price_ranges: [
                {label: "Under ₹2,00,000", min: 0, max: 200000},
                {label: "₹2,00,000 - ₹4,00,000", min: 200000, max: 400000},
                {label: "₹4,00,000 - ₹6,00,000", min: 400000, max: 600000},
                {label: "₹6,00,000 - ₹8,00,000", min: 600000, max: 800000},
                {label: "Above ₹8,00,000", min: 800000, max: 999999999}
            ],
            materials: ["Silk", "Wool", "Cotton", "Bamboo Silk", "Synthetic", "Blends"],
            techniques: ["Hand-knotted", "Hand-tufted", "Machine-woven", "Flat-weave", "Overdyed"],
            sizes: ["Small (Under 6x8)", "Medium (6x8 to 8x10)", "Large (8x10 to 10x12)", "Extra Large (Above 10x12)"],
            colors: ["Red", "Blue", "Green", "Gold", "Gray", "Beige", "Black", "Multi-color"],
            origins: ["Persian Style", "Contemporary", "Traditional", "Modern", "Vintage", "Custom"]
        };

        this.filteredProducts = [...this.products];
    }

    setupEventListeners() {
        // Navigation
        document.getElementById('searchBtn')?.addEventListener('click', () => this.handleSearch());
        document.getElementById('searchInput')?.addEventListener('input', (e) => this.handleSearchInput(e));
        document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSearch();
        });

        // Cart, Wishlist, Compare buttons
        document.getElementById('cartBtn')?.addEventListener('click', () => this.openCartModal());
        document.getElementById('wishlistBtn')?.addEventListener('click', () => this.openWishlistModal());
        document.getElementById('compareBtn')?.addEventListener('click', () => this.openCompareModal());
        document.getElementById('consultationBtn')?.addEventListener('click', () => this.openConsultation());

        // Hero CTAs
        document.getElementById('shopNowBtn')?.addEventListener('click', () => this.scrollToProducts());
        document.getElementById('viewCategoriesBtn')?.addEventListener('click', () => this.scrollToCategories());

        // Product controls
        document.getElementById('sortSelect')?.addEventListener('change', (e) => this.handleSort(e.target.value));
        document.getElementById('filtersToggle')?.addEventListener('click', () => this.toggleFilters());

        // View toggle
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleViewChange(e.target.dataset.view));
        });

        // Filter controls
        document.getElementById('applyFilters')?.addEventListener('click', () => this.applyFilters());
        document.getElementById('clearFilters')?.addEventListener('click', () => this.clearFilters());
        document.getElementById('filtersClose')?.addEventListener('click', () => this.toggleFilters());

        // Newsletter form
        document.getElementById('newsletterForm')?.addEventListener('submit', (e) => this.handleNewsletterSubmit(e));

        // Testimonial controls
        document.getElementById('testimonialsPrev')?.addEventListener('click', () => this.previousTestimonial());
        document.getElementById('testimonialsNext')?.addEventListener('click', () => this.nextTestimonial());
        
        // Testimonial dots
        document.querySelectorAll('#testimonialsDots .dot').forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToTestimonial(index));
        });

        // Modal controls
        this.setupModalEventListeners();

        // Mobile navigation
        document.getElementById('navToggle')?.addEventListener('click', () => this.toggleMobileNav());
    }

    setupModalEventListeners() {
        // Product modal
        document.getElementById('modalClose')?.addEventListener('click', () => this.closeProductModal());
        document.getElementById('modalBackdrop')?.addEventListener('click', () => this.closeProductModal());

        // Cart modal
        document.getElementById('cartModalClose')?.addEventListener('click', () => this.closeCartModal());
        document.getElementById('shopNowFromCart')?.addEventListener('click', () => {
            this.closeCartModal();
            this.scrollToProducts();
        });
        document.getElementById('continueShoppingBtn')?.addEventListener('click', () => this.closeCartModal());
        document.getElementById('checkoutBtn')?.addEventListener('click', () => this.handleCheckout());

        // Wishlist modal
        document.getElementById('wishlistModalClose')?.addEventListener('click', () => this.closeWishlistModal());

        // Compare modal
        document.getElementById('compareModalClose')?.addEventListener('click', () => this.closeCompareModal());

        // Product modal actions
        document.getElementById('addToCartBtn')?.addEventListener('click', () => this.addToCartFromModal());
        document.getElementById('addToWishlistBtn')?.addEventListener('click', () => this.addToWishlistFromModal());
        document.getElementById('addToCompareBtn')?.addEventListener('click', () => this.addToCompareFromModal());
    }

    // Testimonials Carousel
    initTestimonials() {
        this.startTestimonialCarousel();
    }

    startTestimonialCarousel() {
        this.testimonialInterval = setInterval(() => {
            this.nextTestimonial();
        }, 5000);
    }

    stopTestimonialCarousel() {
        if (this.testimonialInterval) {
            clearInterval(this.testimonialInterval);
        }
    }

    nextTestimonial() {
        this.currentTestimonial = (this.currentTestimonial + 1) % 3;
        this.updateTestimonialDisplay();
    }

    previousTestimonial() {
        this.currentTestimonial = this.currentTestimonial === 0 ? 2 : this.currentTestimonial - 1;
        this.updateTestimonialDisplay();
    }

    goToTestimonial(index) {
        this.currentTestimonial = index;
        this.updateTestimonialDisplay();
        this.stopTestimonialCarousel();
        setTimeout(() => this.startTestimonialCarousel(), 3000);
    }

    updateTestimonialDisplay() {
        const cards = document.querySelectorAll('.testimonial-card');
        const dots = document.querySelectorAll('#testimonialsDots .dot');

        cards.forEach((card, index) => {
            card.classList.toggle('active', index === this.currentTestimonial);
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentTestimonial);
        });
    }

    // Newsletter
    handleNewsletterSubmit(e) {
        e.preventDefault();
        const emailInput = e.target.querySelector('.newsletter-input');
        const email = emailInput.value.trim();

        if (this.validateEmail(email)) {
            this.showNotification('Thank you for subscribing to our luxury updates!', 'success');
            emailInput.value = '';
        } else {
            this.showNotification('Please enter a valid email address', 'error');
        }
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Back to Top Button
    initBackToTop() {
        const backToTopBtn = document.getElementById('backToTop');
        if (!backToTopBtn) return;

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
    }

    renderCategories() {
        const categoriesGrid = document.getElementById('categoriesGrid');
        if (!categoriesGrid) return;

        categoriesGrid.innerHTML = this.categories.map(category => `
            <div class="category-card" data-category="${category.id}" onclick="interiorRugsApp.filterByCategory('${category.id}')">
                <img src="${category.image}" alt="${category.name}" class="category-image">
                <div class="category-info">
                    <h3 class="category-name">${category.name}</h3>
                    <p class="category-description">${category.description}</p>
                    <span class="category-count">${category.product_count} products</span>
                </div>
            </div>
        `).join('');
    }

    renderProducts() {
        const productsGrid = document.getElementById('productsGrid');
        const productsCount = document.getElementById('productsCount');
        
        if (!productsGrid) return;

        const products = this.getFilteredAndSortedProducts();
        
        if (productsCount) {
            productsCount.textContent = `${products.length} luxury rugs`;
        }

        productsGrid.className = `products-grid ${this.currentView}-view`;
        
        productsGrid.innerHTML = products.map(product => {
            const categoryName = this.categories.find(cat => cat.id === product.category)?.name || 'Luxury Rugs';
            const salePercentage = product.sale_price ? Math.round((1 - product.sale_price / product.price) * 100) : 0;
            
            return `
                <div class="product-card" data-product-id="${product.id}" onclick="interiorRugsApp.openProductModal('${product.id}')">
                    <div class="product-image">
                        <img src="${product.images[0]}" alt="${product.name}" class="product-img">
                        ${product.sale_price ? `<div class="product-badge">-${salePercentage}%</div>` : ''}
                        <div class="product-actions">
                            <button class="action-btn" onclick="event.stopPropagation(); interiorRugsApp.toggleWishlist('${product.id}')" title="Add to Wishlist">
                                ♡
                            </button>
                            <button class="action-btn" onclick="event.stopPropagation(); interiorRugsApp.addToCompare('${product.id}')" title="Compare">
                                ⚖
                            </button>
                            <button class="action-btn" onclick="event.stopPropagation(); interiorRugsApp.quickAddToCart('${product.id}')" title="Quick Add">
                                🛒
                            </button>
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="product-category">${categoryName}</div>
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-rating">
                            <div class="rating-stars">
                                ${this.renderStars(product.rating)}
                            </div>
                            <span class="rating-count">(${product.reviews})</span>
                        </div>
                        <div class="product-price">
                            <span class="current-price">₹${this.formatPrice(product.sale_price || product.price)}</span>
                            ${product.sale_price ? `<span class="original-price">₹${this.formatPrice(product.price)}</span>` : ''}
                        </div>
                        <div class="product-features">
                            ${product.features.slice(0, 3).map(feature => 
                                `<span class="feature-tag">${feature}</span>`
                            ).join('')}
                        </div>
                        <button class="product-cta" onclick="event.stopPropagation(); interiorRugsApp.openProductModal('${product.id}')">
                            View Details
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        if (products.length === 0) {
            productsGrid.innerHTML = `
                <div class="no-products">
                    <div class="empty-icon">🔍</div>
                    <h3>No products found</h3>
                    <p>Try adjusting your filters or search terms</p>
                    <button class="luxury-btn btn-primary" onclick="interiorRugsApp.clearFilters()">
                        Clear Filters
                    </button>
                </div>
            `;
        }
    }

    renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        let starsHTML = '';
        
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<span class="star filled">★</span>';
        }
        
        if (hasHalfStar) {
            starsHTML += '<span class="star half">☆</span>';
        }
        
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<span class="star empty">☆</span>';
        }
        
        return starsHTML;
    }

    formatPrice(price) {
        return new Intl.NumberFormat('en-IN').format(price);
    }

    renderFilters() {
        this.renderPriceFilters();
        this.renderMaterialFilters();
        this.renderTechniqueFilters();
        this.renderSizeFilters();
    }

    renderPriceFilters() {
        const container = document.getElementById('priceFilters');
        if (!container) return;

        container.innerHTML = this.filters.price_ranges.map(range => `
            <div class="filter-option">
                <input type="radio" name="price" value="${range.min}-${range.max}" id="price-${range.min}">
                <label for="price-${range.min}">${range.label}</label>
            </div>
        `).join('');
    }

    renderMaterialFilters() {
        const container = document.getElementById('materialFilters');
        if (!container) return;

        container.innerHTML = this.filters.materials.map(material => `
            <div class="filter-option">
                <input type="checkbox" name="material" value="${material}" id="material-${material.toLowerCase()}">
                <label for="material-${material.toLowerCase()}">${material}</label>
            </div>
        `).join('');
    }

    renderTechniqueFilters() {
        const container = document.getElementById('techniqueFilters');
        if (!container) return;

        container.innerHTML = this.filters.techniques.map(technique => `
            <div class="filter-option">
                <input type="checkbox" name="technique" value="${technique}" id="technique-${technique.toLowerCase().replace(/[^a-z]/g, '')}">
                <label for="technique-${technique.toLowerCase().replace(/[^a-z]/g, '')}">${technique}</label>
            </div>
        `).join('');
    }

    renderSizeFilters() {
        const container = document.getElementById('sizeFilters');
        if (!container) return;

        container.innerHTML = this.filters.sizes.map(size => `
            <div class="filter-option">
                <input type="checkbox" name="size" value="${size}" id="size-${size.toLowerCase().replace(/[^a-z]/g, '')}">
                <label for="size-${size.toLowerCase().replace(/[^a-z]/g, '')}">${size}</label>
            </div>
        `).join('');
    }

    getFilteredAndSortedProducts() {
        let products = [...this.filteredProducts];
        
        // Apply current category filter
        if (this.currentCategory) {
            products = products.filter(product => product.category === this.currentCategory);
        }

        // Apply search filter
        if (this.searchQuery) {
            const query = this.searchQuery.toLowerCase();
            products = products.filter(product => 
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.features.some(feature => feature.toLowerCase().includes(query))
            );
        }

        // Sort products
        switch (this.currentSort) {
            case 'price-low':
                products.sort((a, b) => (a.sale_price || a.price) - (b.sale_price || b.price));
                break;
            case 'price-high':
                products.sort((a, b) => (b.sale_price || b.price) - (a.sale_price || a.price));
                break;
            case 'rating':
                products.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                products.sort((a, b) => b.id.localeCompare(a.id));
                break;
            default: // featured
                // Keep original order for featured
                break;
        }

        return products;
    }

    // Event Handlers
    handleSearch() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            this.searchQuery = searchInput.value.trim();
            this.renderProducts();
            
            if (this.searchQuery) {
                this.showNotification(`Searching for "${this.searchQuery}"...`, 'info');
            }
        }
    }

    handleSearchInput(e) {
        // Real-time search with debouncing
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
            this.searchQuery = e.target.value.trim();
            this.renderProducts();
        }, 300);
    }

    handleSort(sortType) {
        this.currentSort = sortType;
        this.renderProducts();
        this.showNotification(`Sorted by ${sortType.replace('-', ' ')}`, 'success');
    }

    handleViewChange(view) {
        this.currentView = view;
        document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-view="${view}"]`).classList.add('active');
        this.renderProducts();
    }

    toggleFilters() {
        const sidebar = document.getElementById('filtersSidebar');
        if (sidebar) {
            sidebar.classList.toggle('active');
            
            if (sidebar.classList.contains('active')) {
                this.renderFilters();
            }
        }
    }

    applyFilters() {
        // Get selected filters
        const selectedFilters = this.getSelectedFilters();
        
        // Apply filters to products
        this.filteredProducts = this.products.filter(product => {
            return this.matchesFilters(product, selectedFilters);
        });
        
        this.renderProducts();
        this.toggleFilters();
        this.showNotification('Filters applied successfully', 'success');
    }

    getSelectedFilters() {
        const filters = {};
        
        // Price range
        const priceRadio = document.querySelector('input[name="price"]:checked');
        if (priceRadio) {
            const [min, max] = priceRadio.value.split('-').map(Number);
            filters.priceRange = { min, max };
        }
        
        // Materials
        const materials = Array.from(document.querySelectorAll('input[name="material"]:checked'))
            .map(input => input.value);
        if (materials.length > 0) {
            filters.materials = materials;
        }
        
        // Techniques
        const techniques = Array.from(document.querySelectorAll('input[name="technique"]:checked'))
            .map(input => input.value);
        if (techniques.length > 0) {
            filters.techniques = techniques;
        }
        
        // Sizes
        const sizes = Array.from(document.querySelectorAll('input[name="size"]:checked'))
            .map(input => input.value);
        if (sizes.length > 0) {
            filters.sizes = sizes;
        }
        
        return filters;
    }

    matchesFilters(product, filters) {
        // Price filter
        if (filters.priceRange) {
            const price = product.sale_price || product.price;
            if (price < filters.priceRange.min || price > filters.priceRange.max) {
                return false;
            }
        }
        
        // Material filter
        if (filters.materials) {
            const productMaterial = product.specifications.material.toLowerCase();
            const matches = filters.materials.some(material => 
                productMaterial.includes(material.toLowerCase())
            );
            if (!matches) return false;
        }
        
        // Technique filter
        if (filters.techniques) {
            const productTechnique = product.specifications.technique.toLowerCase();
            const matches = filters.techniques.some(technique => 
                productTechnique.includes(technique.toLowerCase())
            );
            if (!matches) return false;
        }
        
        return true;
    }

    clearFilters() {
        // Clear all filter inputs
        document.querySelectorAll('.filter-option input').forEach(input => {
            input.checked = false;
        });
        
        // Reset filtered products
        this.filteredProducts = [...this.products];
        this.currentCategory = null;
        this.searchQuery = '';
        
        // Clear search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = '';
        }
        
        this.renderProducts();
        this.showNotification('All filters cleared', 'success');
    }

    filterByCategory(categoryId) {
        this.currentCategory = categoryId;
        this.renderProducts();
        this.scrollToProducts();
        
        const categoryName = this.categories.find(cat => cat.id === categoryId)?.name || 'Category';
        this.showNotification(`Showing ${categoryName}`, 'success');
    }

    // Product Modal
    openProductModal(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const modal = document.getElementById('productModal');
        if (!modal) return;

        // Populate modal content
        document.getElementById('mainProductImage').src = product.images[0];
        document.getElementById('mainProductImage').alt = product.name;
        document.getElementById('modalProductName').textContent = product.name;
        document.getElementById('modalProductDescription').textContent = product.description;

        // Rating
        const ratingContainer = document.getElementById('modalProductRating');
        ratingContainer.querySelector('.stars').innerHTML = this.renderStars(product.rating);
        ratingContainer.querySelector('.reviews-count').textContent = `(${product.reviews} reviews)`;

        // Price
        const priceContainer = document.getElementById('modalProductPrice');
        priceContainer.querySelector('.current-price').textContent = `₹${this.formatPrice(product.sale_price || product.price)}`;
        const salePriceSpan = priceContainer.querySelector('.sale-price');
        if (product.sale_price) {
            salePriceSpan.textContent = `₹${this.formatPrice(product.price)}`;
            salePriceSpan.style.display = 'inline';
        } else {
            salePriceSpan.style.display = 'none';
        }

        // Features
        document.getElementById('modalProductFeatures').innerHTML = product.features.map(feature => 
            `<span class="feature-tag">${feature}</span>`
        ).join('');

        // Specifications
        const specsGrid = document.getElementById('modalProductSpecs');
        specsGrid.innerHTML = Object.entries(product.specifications).map(([key, value]) => `
            <div class="spec-item">
                <span class="spec-label">${key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                <span class="spec-value">${value}</span>
            </div>
        `).join('');

        // Size options
        document.getElementById('modalSizeOptions').innerHTML = product.sizes.map(sizeOption => `
            <div class="size-option" data-size="${sizeOption.size}" data-price="${sizeOption.price}">
                ${sizeOption.size} - ₹${this.formatPrice(sizeOption.price)}
            </div>
        `).join('');

        // Image thumbnails
        document.getElementById('imageThumbnails').innerHTML = product.images.map((img, index) => `
            <img src="${img}" alt="View ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}" 
                 onclick="interiorRugsApp.changeMainImage('${img}', ${index})">
        `).join('');

        // Set product ID for modal actions
        modal.dataset.productId = productId;
        
        // Show modal
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    changeMainImage(imageSrc, index) {
        document.getElementById('mainProductImage').src = imageSrc;
        
        // Update thumbnail active state
        document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
    }

    closeProductModal() {
        const modal = document.getElementById('productModal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    // Shopping Cart
    addToCartFromModal() {
        const modal = document.getElementById('productModal');
        const productId = modal.dataset.productId;
        const selectedSize = document.querySelector('.size-option.active');
        
        if (!selectedSize) {
            // Select first size by default
            const firstSize = document.querySelector('.size-option');
            if (firstSize) {
                firstSize.classList.add('active');
                this.addToCart(productId, firstSize.dataset.size, firstSize.dataset.price);
            }
        } else {
            this.addToCart(productId, selectedSize.dataset.size, selectedSize.dataset.price);
        }
    }

    quickAddToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product && product.sizes.length > 0) {
            const defaultSize = product.sizes[0];
            this.addToCart(productId, defaultSize.size, defaultSize.price);
        }
    }

    addToCart(productId, size, price) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.cart.find(item => 
            item.productId === productId && item.size === size
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                productId,
                size,
                price: parseInt(price),
                quantity: 1,
                addedAt: new Date()
            });
        }

        this.saveCart();
        this.updateCartCount();
        this.showNotification(`${product.name} added to cart!`, 'success');
    }

    removeFromCart(productId, size) {
        this.cart = this.cart.filter(item => 
            !(item.productId === productId && item.size === size)
        );
        this.saveCart();
        this.updateCartCount();
        this.renderCart();
    }

    updateCartQuantity(productId, size, newQuantity) {
        const item = this.cart.find(item => 
            item.productId === productId && item.size === size
        );
        
        if (item) {
            if (newQuantity <= 0) {
                this.removeFromCart(productId, size);
            } else {
                item.quantity = newQuantity;
                this.saveCart();
                this.renderCart();
            }
        }
    }

    openCartModal() {
        const modal = document.getElementById('cartModal');
        if (!modal) return;

        this.renderCart();
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    closeCartModal() {
        const modal = document.getElementById('cartModal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    renderCart() {
        const cartContent = document.getElementById('cartContent');
        const cartEmpty = document.getElementById('cartEmpty');
        const cartItems = document.getElementById('cartItems');
        const cartSummary = document.getElementById('cartSummary');

        if (this.cart.length === 0) {
            cartEmpty.classList.remove('hidden');
            cartItems.classList.add('hidden');
            cartSummary.classList.add('hidden');
            return;
        }

        cartEmpty.classList.add('hidden');
        cartItems.classList.remove('hidden');
        cartSummary.classList.remove('hidden');

        // Render cart items
        cartItems.innerHTML = this.cart.map(item => {
            const product = this.products.find(p => p.id === item.productId);
            if (!product) return '';

            return `
                <div class="cart-item">
                    <img src="${product.images[0]}" alt="${product.name}" class="item-image">
                    <div class="item-info">
                        <h4>${product.name}</h4>
                        <div class="item-price">₹${this.formatPrice(item.price)}</div>
                        <div class="item-size">Size: ${item.size}</div>
                        <div class="item-controls">
                            <button class="qty-btn" onclick="interiorRugsApp.updateCartQuantity('${item.productId}', '${item.size}', ${item.quantity - 1})">-</button>
                            <span class="qty-display">${item.quantity}</span>
                            <button class="qty-btn" onclick="interiorRugsApp.updateCartQuantity('${item.productId}', '${item.size}', ${item.quantity + 1})">+</button>
                        </div>
                    </div>
                    <div class="item-actions">
                        <div class="item-total">₹${this.formatPrice(item.price * item.quantity)}</div>
                        <button class="remove-btn" onclick="interiorRugsApp.removeFromCart('${item.productId}', '${item.size}')">
                            Remove
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        // Render cart summary
        const subtotal = this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        document.getElementById('cartSubtotal').textContent = `₹${this.formatPrice(subtotal)}`;
        document.getElementById('cartTotal').textContent = `₹${this.formatPrice(subtotal)}`;
    }

    handleCheckout() {
        if (this.cart.length === 0) return;
        
        this.showNotification('Redirecting to secure checkout...', 'info');
        
        setTimeout(() => {
            this.showNotification('Checkout feature coming soon! Contact us for purchases.', 'info');
        }, 1500);
    }

    // Wishlist
    toggleWishlist(productId) {
        const isInWishlist = this.wishlist.includes(productId);
        
        if (isInWishlist) {
            this.wishlist = this.wishlist.filter(id => id !== productId);
            this.showNotification('Removed from wishlist', 'info');
        } else {
            this.wishlist.push(productId);
            const product = this.products.find(p => p.id === productId);
            this.showNotification(`${product?.name || 'Item'} added to wishlist!`, 'success');
        }
        
        this.saveWishlist();
        this.updateWishlistCount();
    }

    addToWishlistFromModal() {
        const modal = document.getElementById('productModal');
        const productId = modal.dataset.productId;
        this.toggleWishlist(productId);
    }

    openWishlistModal() {
        const modal = document.getElementById('wishlistModal');
        if (!modal) return;

        this.renderWishlist();
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    closeWishlistModal() {
        const modal = document.getElementById('wishlistModal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    renderWishlist() {
        const wishlistEmpty = document.getElementById('wishlistEmpty');
        const wishlistItems = document.getElementById('wishlistItems');

        if (this.wishlist.length === 0) {
            wishlistEmpty.classList.remove('hidden');
            wishlistItems.classList.add('hidden');
            return;
        }

        wishlistEmpty.classList.add('hidden');
        wishlistItems.classList.remove('hidden');

        wishlistItems.innerHTML = this.wishlist.map(productId => {
            const product = this.products.find(p => p.id === productId);
            if (!product) return '';

            return `
                <div class="wishlist-item">
                    <img src="${product.images[0]}" alt="${product.name}" class="item-image">
                    <div class="item-info">
                        <h4>${product.name}</h4>
                        <div class="item-price">₹${this.formatPrice(product.sale_price || product.price)}</div>
                        <div class="item-rating">
                            ${this.renderStars(product.rating)} (${product.reviews})
                        </div>
                    </div>
                    <div class="item-actions">
                        <button class="luxury-btn btn-primary" onclick="interiorRugsApp.openProductModal('${productId}')">
                            View Details
                        </button>
                        <button class="remove-btn" onclick="interiorRugsApp.toggleWishlist('${productId}')">
                            Remove
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Compare
    addToCompare(productId) {
        if (this.compareList.includes(productId)) {
            this.showNotification('Product already in comparison', 'info');
            return;
        }

        if (this.compareList.length >= 3) {
            this.showNotification('Maximum 3 products can be compared', 'error');
            return;
        }

        this.compareList.push(productId);
        const product = this.products.find(p => p.id === productId);
        this.showNotification(`${product?.name || 'Item'} added to comparison!`, 'success');
        
        this.saveCompareList();
        this.updateCompareCount();
    }

    addToCompareFromModal() {
        const modal = document.getElementById('productModal');
        const productId = modal.dataset.productId;
        this.addToCompare(productId);
    }

    removeFromCompare(productId) {
        this.compareList = this.compareList.filter(id => id !== productId);
        this.saveCompareList();
        this.updateCompareCount();
        this.renderCompare();
    }

    openCompareModal() {
        const modal = document.getElementById('compareModal');
        if (!modal) return;

        this.renderCompare();
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    closeCompareModal() {
        const modal = document.getElementById('compareModal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    renderCompare() {
        const compareEmpty = document.getElementById('compareEmpty');
        const compareTable = document.getElementById('compareTable');

        if (this.compareList.length === 0) {
            compareEmpty.classList.remove('hidden');
            compareTable.classList.add('hidden');
            return;
        }

        compareEmpty.classList.add('hidden');
        compareTable.classList.remove('hidden');

        const products = this.compareList.map(id => this.products.find(p => p.id === id)).filter(Boolean);
        
        compareTable.innerHTML = `
            <div class="compare-grid">
                <div class="compare-header">
                    <div></div>
                    ${products.map(product => `
                        <div class="compare-product">
                            <img src="${product.images[0]}" alt="${product.name}" class="compare-image">
                            <h4>${product.name}</h4>
                            <div class="item-price">₹${this.formatPrice(product.sale_price || product.price)}</div>
                            <button class="luxury-btn btn-primary" onclick="interiorRugsApp.openProductModal('${product.id}')">
                                View Details
                            </button>
                            <button class="remove-btn" onclick="interiorRugsApp.removeFromCompare('${product.id}')">
                                Remove
                            </button>
                        </div>
                    `).join('')}
                </div>
                
                <div class="compare-row">
                    <div class="compare-label">Rating</div>
                    ${products.map(product => `
                        <div class="compare-value">${this.renderStars(product.rating)} (${product.reviews})</div>
                    `).join('')}
                </div>
                
                <div class="compare-row">
                    <div class="compare-label">Material</div>
                    ${products.map(product => `
                        <div class="compare-value">${product.specifications.material}</div>
                    `).join('')}
                </div>
                
                <div class="compare-row">
                    <div class="compare-label">Technique</div>
                    ${products.map(product => `
                        <div class="compare-value">${product.specifications.technique}</div>
                    `).join('')}
                </div>
                
                <div class="compare-row">
                    <div class="compare-label">Origin</div>
                    ${products.map(product => `
                        <div class="compare-value">${product.specifications.origin}</div>
                    `).join('')}
                </div>
                
                <div class="compare-row">
                    <div class="compare-label">Delivery Time</div>
                    ${products.map(product => `
                        <div class="compare-value">${product.delivery_time}</div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Utility Functions
    updateCartCount() {
        const totalItems = this.cart.reduce((total, item) => total + item.quantity, 0);
        const countElement = document.getElementById('cartCount');
        if (countElement) {
            countElement.textContent = totalItems;
            countElement.classList.toggle('active', totalItems > 0);
        }
    }

    updateWishlistCount() {
        const countElement = document.getElementById('wishlistCount');
        if (countElement) {
            countElement.textContent = this.wishlist.length;
            countElement.classList.toggle('active', this.wishlist.length > 0);
        }
    }

    updateCompareCount() {
        const countElement = document.getElementById('compareCount');
        if (countElement) {
            countElement.textContent = this.compareList.length;
            countElement.classList.toggle('active', this.compareList.length > 0);
        }
    }

    scrollToProducts() {
        document.getElementById('products')?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }

    scrollToCategories() {
        document.getElementById('categories')?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }

    openConsultation() {
        this.showNotification('Opening consultation booking...', 'info');
        setTimeout(() => {
            this.showNotification('Contact us at info@interiorrugs.com for personalized consultation', 'success');
        }, 1500);
    }

    toggleMobileNav() {
        // Mobile navigation toggle (placeholder)
        this.showNotification('Mobile navigation toggle', 'info');
    }

    // Local Storage
    saveCart() {
        localStorage.setItem('interiorRugsCart', JSON.stringify(this.cart));
    }

    saveWishlist() {
        localStorage.setItem('interiorRugsWishlist', JSON.stringify(this.wishlist));
    }

    saveCompareList() {
        localStorage.setItem('interiorRugsCompare', JSON.stringify(this.compareList));
    }

    loadStoredData() {
        // Load cart
        const savedCart = localStorage.getItem('interiorRugsCart');
        if (savedCart) {
            this.cart = JSON.parse(savedCart);
        }

        // Load wishlist
        const savedWishlist = localStorage.getItem('interiorRugsWishlist');
        if (savedWishlist) {
            this.wishlist = JSON.parse(savedWishlist);
        }

        // Load compare list
        const savedCompare = localStorage.getItem('interiorRugsCompare');
        if (savedCompare) {
            this.compareList = JSON.parse(savedCompare);
        }
    }

    // Notification System
    showNotification(message, type = 'info') {
        const notifications = document.getElementById('notifications');
        if (!notifications) return;

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        notification.innerHTML = `
            <div class="notification-content">
                <div>${message}</div>
                <button class="notification-close">&times;</button>
            </div>
        `;

        notifications.appendChild(notification);

        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Auto-hide after 5 seconds
        setTimeout(() => {
            this.hideNotification(notification);
        }, 5000);

        // Manual close
        notification.querySelector('.notification-close').addEventListener('click', () => {
            this.hideNotification(notification);
        });
    }

    hideNotification(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
}

// Initialize the application
const interiorRugsApp = new InteriorRugsApp();

// Global helper functions for inline event handlers
window.interiorRugsApp = interiorRugsApp;

// Handle size selection in product modal
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('size-option')) {
        // Remove active from all size options
        document.querySelectorAll('.size-option').forEach(option => {
            option.classList.remove('active');
        });
        
        // Add active to clicked option
        e.target.classList.add('active');
    }
});

// Handle escape key for modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals
        document.querySelectorAll('.modal:not(.hidden)').forEach(modal => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        });
    }
});

// Initialize filters on page load
document.addEventListener('DOMContentLoaded', () => {
    interiorRugsApp.renderFilters();
});

console.log('Interior Rugs Complete E-Commerce Application Loaded Successfully!');