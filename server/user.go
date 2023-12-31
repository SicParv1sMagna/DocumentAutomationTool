package autotool

/*
*	структура User - модель пользователя
 */
type User struct {
	Id       int    `json:"-" db:"id"`
	Name     string `json:"name" binding:"required"`
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
	// Subscribed bool   `json:"subscribed" binding:"required"`
}
