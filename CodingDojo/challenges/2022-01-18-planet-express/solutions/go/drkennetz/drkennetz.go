package drkennetz

type Delivery struct {
	ID int
	Time int
	Status string
}


func CalcTime(deliveries []Delivery) int {
	if len(deliveries) == 0 {
		return 0
	}
	var pickup = make(map[int]int)
	var total = make(map[int]int)
	for _, delivery := range deliveries {
		if delivery.Status == "pickup" {
			pickup[delivery.ID] = delivery.Time
		} else if delivery.Status == "eaten" || delivery.Status == "dropoff" {
			total[delivery.ID] = total[delivery.ID] + (delivery.Time - pickup[delivery.ID])
		}
	}
	totalTime := 0
	for key := range total {
		totalTime += total[key]
	}
	return totalTime
}
