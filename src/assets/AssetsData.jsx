export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Browse Properties", path: "/browse" },
  { name: "List Your Property", path: "/list-property" },
  { name: "Login", path: "/login" },
  { name: "Sign Up", path: "/signup" },
];

// After login: Tenant Menu
export const tenantLinks = [
  { name: "Dashboard", path: "/tenant/dashboard" },
  { name: "My Favorites", path: "/tenant/favorites" },
  { name: "Messages", path: "/tenant/messages" },
  { name: "Account Settings", path: "/tenant/settings" },
];

// After login: Landlord Menu
export const landlordLinks = [
  { name: "Dashboard", path: "/landlord/dashboard" },
  { name: "My Listings", path: "/landlord/listings" },
  { name: "Add New Property", path: "/landlord/add-property" },
  { name: "Messages", path: "/landlord/messages" },
  { name: "Account Settings", path: "/landlord/settings" },
];

// Property Details Page (Dynamic Route)
export const propertyDetailsRoute = "/property/:id"; 


 //howit workd data
export const howItWorksData = [
  {
    id: 1,
    title: "Sign Up",
    description: "Create your free account as tenant or landlord.",
    icon: "fa-solid fa-user"
  },
  {
    id: 2,
    title: "Browse or List",
    description: "Tenants browse listings, landlords post properties.",
    icon: "fa-solid fa-house"
  },
  {
    id: 3,
    title: "Connect Directly",
    description: "Chat and finalize rental, no middlemen.",
    icon: "fa-solid fa-comment"
  }
];
 //Why choose us data
export const whyChooseUsData = [
  {
    id: 1,
    title: "0% Agent Fees",
    icon: "✅",
    description: "We eliminate the middleman. Renters and landlords connect directly, saving both parties hefty agency commissions."
  },
  {
    id: 2,
    title: "Verified Listings",
    icon: "✅",
    description: "Every property is reviewed before going live. We make sure listings are real, up-to-date, and accurately described."
  },
  {
    id: 3,
    title: "Easy Communication",
    icon: "✅",
    description: "Chat directly with landlords or tenants through our secure messaging system. Fast, simple, and private."
  },
  {
    id: 4,
    title: "Secure and Private",
    icon: "✅",
    description: "Your data and conversations are encrypted and protected. We never sell or share your personal information."
  },
  {
    id: 5,
    title: "Flexible Search Tools",
    icon: "✅",
    description: "Filter by location, budget, amenities, or number of bedrooms. Find exactly what you're looking for in seconds."
  },
  {
    id: 6,
    title: "Landlord & Tenant Friendly",
    icon: "✅",
    description: "Whether you're listing or renting, our platform supports both sides with useful features and a seamless experience."
  }
];