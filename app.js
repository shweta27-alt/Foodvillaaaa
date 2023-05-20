import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <img src="https://scontent.fbom5-1.fna.fbcdn.net/v/t39.30808-1/300038023_478432400961119_1696668585705704999_n.png?stp=dst-png_p120x120&_nc_cat=102&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=6BHeEoAFMA8AX8AaKnJ&_nc_ht=scontent.fbom5-1.fna&oh=00_AfAn4-c7-TSDpP3oZY-o_4wpYO10C4x1xtookkBiR1-fTg&oe=646D9C30" />
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestrauntList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "502220",
      name: "KT's Flames Chinese Corner",
      uuid: "99daa9dd-7cc6-47eb-ad13-ebb333498ecc",
      city: "5",
      area: "Kalyan",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "aimynefnpbgbxxiftloj",
      cuisines: ["Chinese", "Arabian", "Fast Food", "Asian"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "kt's-flames-chinese-corner-ulhasnagar-ulhasnagar",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "FRONT OF SUZUKI SHOWROOM, NEAR SHRI DATTA PRASAD VADAPAV CENTER, SHANT NAGAR, ULHASNAGAR 3 , Camp 2, Ulhasnagar & Ambarnath Tahashil (Thane Zone-9), , Maharashtra, 421002",
      locality: "Shant Nagar",
      parentId: 300921,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 4700,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4700,
        message: "",
        title: "Delivery Charge",
        amount: "4700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹1000",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "502220",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "676262",
      name: "Kurries and krolls",
      uuid: "99867c76-1696-4476-b3ab-b7c3d06fcf2c",
      city: "5",
      area: "Kalyan",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "3495c7f000d3013ae9402658369eee6c",
      cuisines: ["North Indian"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: "30 MINS",
      lastMileTravel: 2.200000047683716,
      slugs: {
        restaurant: "kurries-and-krolls-kalyan-kalyan",
        city: "mumbai",
      },
      cityState: "5",
      address: "Khadakpada, Kalyan, Maharashtra 421301, India",
      locality: "Khadakpada",
      parentId: 121997,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "ABOVE ₹500",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "676262",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 2.200000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "673438",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      uuid: "d6c34e66-3dd6-46cf-83e3-18e5cfc92477",
      city: "5",
      area: "Kalyan",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "909daf097e30cd01d8fd121ddc6de2f6",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 2.5999999046325684,
      slugs: {
        restaurant:
          "kwality-walls-frozen-dessert-and-ice-cream-shop-kalyan-kalyan-17",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "MEDI AAYUSH CHEMIST- SHOP NO-09, GROUND FLOOR, RADHA NAGARI,BUILDING NO-E- 2,VILLAGE GANDHARE,KALYAN, KALYAN TAHSHIL-421301 (HUL-I10C032P2117)",
      locality: "Radha Nagari",
      parentId: 582,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.5 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "673438",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 2.5999999046325684,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.5",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "710556",
      name: "CILANTRO",
      uuid: "dc879210-aa23-498c-b376-dc6be9494a89",
      city: "5",
      area: "Kalyan",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "375f8d233613b205ab37f42d110edc88",
      cuisines: ["North Indian", "Chinese", "Biryani"],
      tags: [],
      costForTwo: 39800,
      costForTwoString: "₹398 FOR TWO",
      deliveryTime: 32,
      minDeliveryTime: 32,
      maxDeliveryTime: 32,
      slaString: "32 MINS",
      lastMileTravel: 1.2999999523162842,
      slugs: {
        restaurant: "cilantro-kalyan-kalyan-2",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "SHOP NO 02.BALARAM BHOIR CHAL,RAMBAUG LANE NO 4,CHIKANGHAR NEAR SAIBABA MANDIR ,KALYAN., Kalyan Tahashil (Except Kalyan Dombivali Municipal Corporation ), Kalyan Tahashil (Thane Zone-8), Maharashtra -",
      locality: "Chikan Ghar Rd",
      parentId: 3900,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "710556",
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        lastMileTravel: 1.2999999523162842,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: true,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "654070",
      name: "Subway",
      uuid: "8923d181-4cb7-45c1-a853-9c6a92b941de",
      city: "5",
      area: "Shelar Park Kalyan west",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "0bf19a82b109b40c2f5c56d00f071a33",
      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 2.200000047683716,
      slugs: {
        restaurant: "subway-kalyan-west-kalyan",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "SHOP NO. - 17 AND 18, GROUND FLOOR, , SHELAR PARK, KHADAKPADA, KALYAN WEST, MAHARASHTRA- 421301, Zone H, Kalyan Tahashil (Thane Zone-8), Maharashtra-421301",
      locality: "KALYAN WEST",
      parentId: 2,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "654070",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 2.200000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.7",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "392094",
      name: "La Pino'z Pizza",
      uuid: "38d71388-e303-4ece-9d3f-1a97d72850b0",
      city: "5",
      area: "Kalyan",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "re8ifefdfvrvxr9pgbxr",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: "30 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "la-pino'z-pizza-kalyan-kalyan",
        city: "mumbai",
      },
      cityState: "5",
      address: "Shop No. G-6, Tycoon Tulip, Godrej Hill Road, Kalyan, Kalyan",
      locality: "Godrej Hill Road",
      parentId: 4961,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4700,
        message: "",
        title: "Delivery Charge",
        amount: "4700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹80",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "392094",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.4",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "76757",
      name: "Hotel koliwada",
      uuid: "18effdb4-3dba-4ac6-8d5c-07664b5b4f1c",
      city: "5",
      area: "Kalyan",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "iqsnfvzedheo65dv925h",
      cuisines: ["North Indian", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 40,
      minDeliveryTime: 40,
      maxDeliveryTime: 40,
      slaString: "40 MINS",
      lastMileTravel: 2.0999999046325684,
      slugs: {
        restaurant: "hotel-koliwada-kalyan-kalyan",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "Hotel koliwada, Near Rustom Petrol Pump, Murbar Road, Kalyan West, Mumbai",
      locality: "Near Rustom Petrol Pump",
      parentId: 99821,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "76757",
        deliveryTime: 40,
        minDeliveryTime: 40,
        maxDeliveryTime: 40,
        lastMileTravel: 2.0999999046325684,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.5",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "387846",
      name: "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
      uuid: "6982d625-b94e-4a2c-9de0-c851ef59f712",
      city: "5",
      area: "Kalyan",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "irgddkskwjrinyz0stln",
      cuisines: [
        "Beverages",
        "Desserts",
        "Ice Cream",
        "Waffle",
        "Bakery",
        "Healthy Food",
      ],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 2.299999952316284,
      slugs: {
        restaurant: "frozen-bottle-birla-college-road-kalyan",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "Shop No. 12, Ground Floor, The Soman Sun City, Birla College Road, Kalyan West 421301",
      locality: "Birla College Road",
      parentId: 5655,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "387846",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 2.299999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "76755",
      name: "Malvan Takeaways",
      uuid: "d562c114-6eb3-4af3-828a-a274a283fcda",
      city: "5",
      area: "Kalyan",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "cz3bb2rpbdnfrtedbb2s",
      cuisines: ["Indian", "Malwani", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 37,
      maxDeliveryTime: 37,
      slaString: "37 MINS",
      lastMileTravel: 2.299999952316284,
      slugs: {
        restaurant: "malvan-takeaways-kalyan-kalyan",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "Malvan Takeaways, Near Roshan Petrol Pump, Murbad Road, Kalyan, Mumbai",
      locality: "Near Roshan Petrol Pump",
      parentId: 130980,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "76755",
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        lastMileTravel: 2.299999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "2.8",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "560646",
      name: "BK Cafe",
      uuid: "9952d472-f18e-4adf-8d01-8e63b7b9de13",
      city: "5",
      area: "Kalyan",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "udeniqgceffvnf5wytcn",
      cuisines: ["American", "Cafe"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 38,
      minDeliveryTime: 38,
      maxDeliveryTime: 38,
      slaString: "38 MINS",
      lastMileTravel: 2.299999952316284,
      slugs: {
        restaurant: "bk-cafe-barave-road-kalyan",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "Shop no 1, Shelar park, Building No 5, Barave Road, Kalyan, Maharashtra 421301 ( Next to McDoanlds)",
      locality: "Barave Road",
      parentId: 337525,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "560646",
        deliveryTime: 38,
        minDeliveryTime: 38,
        maxDeliveryTime: 38,
        lastMileTravel: 2.299999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "598425",
      name: "Jai Malhar Dhaba",
      uuid: "158fc33e-0b77-4f3c-bcd0-458d0e8b7b5c",
      city: "5",
      area: "Kalyan",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "gvcnzujv7iltxmd3hiel",
      cuisines: ["South Indian", "Fast Food", "Snacks"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 49,
      minDeliveryTime: 49,
      maxDeliveryTime: 49,
      slaString: "49 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "jai-malhar-dhaba-kalyan-kalyan",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "FLAT NO C-2/303, LULLA COMPLEX, ADHARWADI ROAD, NEAR SHREE COMPLEX, D B CHOWK, KALYAN WEST ,,Zone B,Kalyan Tahashil (Thane Zone-8),Maharashtra-421301",
      locality: "Adharwadi, Khadakpada",
      parentId: 247896,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4700,
        message: "",
        title: "Delivery Charge",
        amount: "4700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "598425",
        deliveryTime: 49,
        minDeliveryTime: 49,
        maxDeliveryTime: 49,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.1",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
];

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img
        className="burger-img"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h4>{cuisines}</h4>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="CardData">
      {RestrauntList.map((restaurant) => {
        return <RestrauntCard {...restaurant.data} />;
      })}
    </div>
  );
};
const Applayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing react element inside the root

//async defer
root.render(<Applayout />);
