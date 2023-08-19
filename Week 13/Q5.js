
let packageType = "standard";

switch (packageType) {
    case "standard":
        console.log("Your package will arrive within 3-5 days.");
        break;

    case "express":
        console.log("Your package will arrive within 1-2 days.");
        break;

    case "overnight":
        console.log("Your package will arrive the next day.");
        break;
}