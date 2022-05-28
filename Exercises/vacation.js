function vacation(groupOfPeople, typeOfGroup, dayOfWeek) {
    totalPrice = 0;
    if (typeOfGroup === 'Students') {
        switch (dayOfWeek) {
            case 'Friday':
                totalPrice = groupOfPeople * 8.4
                break;
            case 'Saturday':
                totalPrice = groupOfPeople * 9.8
                break;
            case 'Sunday':
                totalPrice = groupOfPeople * 10.46
                break;
        }
        if (groupOfPeople >= 30) {
            totalPrice *= 0.85

        }
    } else if (typeOfGroup === 'Business') {

        if (groupOfPeople >= 100) {
            switch (dayOfWeek) {
                case 'Friday':
                    totalPrice = (groupOfPeople - 10) * 10.46
                    break;
                case 'Saturday':
                    totalPrice = (groupOfPeople - 10) * 15.60
                    break;
                case 'Sunday':
                    totalPrice = (groupOfPeople - 10) * 16
                    break;
            }
        } else {
            switch (dayOfWeek) {
                case 'Friday':
                    totalPrice = groupOfPeople * 10.46
                    break;
                case 'Saturday':
                    totalPrice = groupOfPeople * 15.60
                    break;
                case 'Sunday':
                    totalPrice = groupOfPeople * 16
                    break;
            }
        }
    } else if (typeOfGroup === 'Regular') {
        switch (dayOfWeek) {
            case 'Friday':
                totalPrice = groupOfPeople * 15
                break;
            case 'Saturday':
                totalPrice = groupOfPeople * 20
                break;
            case 'Sunday':
                totalPrice = groupOfPeople * 22.50
                break;
        }
        if (groupOfPeople >= 10 && groupOfPeople <= 20) {
            totalPrice *= 0.95

        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
} vacation(40,
    "Regular",
    "Saturday")