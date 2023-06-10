package autotool

/*
*
*	структура User - модель пользователя
*
 */
type User struct {
	Id         int    `json:"-"`
	Name       string `json:"name"`
	Email      string `json:"email"`
	Password   string `json:"password"`
	Subscribed bool   `json:"subscribed"`
}
