const INITIAL_VEHICLES_DATA = [
  {
    vehicle: {
      imageLink:
        "https://file.kelleybluebookimages.com/kbb/base/evox/CP/13488/2021-Toyota-Corolla-front_13488_032_1809x771_1F7_cropped.png",
      vehicleId: "VEH-1",
      make: "Toyota",
      model: "Corolla",
      year: 2021,
      color: "Silver",
      bodyType: "Sedan",
      engineSize: "1.8L",
      fuelType: "Petrol",
      registrationNumber: "CA123456",
      mileage: 45000,
      owner: {
        fullName: "Ethan Walton",
        idNumber: "0307220000001",
        address: {
          street: "123 Main Road",
          city: "Cape Town",
          province: "Western Cape",
          postalCode: "8000",
          country: "South Africa",
        },
      },
    },
    insurancePlan: {
      policyNumber: "INS-1",
      planType: "Bronze",
      coverage: {
        thirdPartyLiability: true,
        theftProtection: true,
        fireDamage: true,
        accidentDamage: true,
        roadsideAssistance: true,
        windscreenCover: true,
        courtesyCar: false,
      },
      premium: 850.0,
      startDate: "2025-01-01",
      endDate: "2025-12-31",
      excess: 3000.0,
      insuredValue: 210000.0,
      paymentMethod: "Debit Order",
      status: "Active",
    },
  },
];

export { INITIAL_VEHICLES_DATA };
