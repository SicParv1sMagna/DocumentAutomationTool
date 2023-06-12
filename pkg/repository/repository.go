package repository

import (
	autotool "github.com/DocumentAutomationTool"
	"github.com/jmoiron/sqlx"
)

/*
*	интерфейс Authorization - набор методов репозиторий
 */
type Authorization interface {
	CreateUser(user autotool.User) (int, error)
	GetUser(email, password string) (autotool.User, error)
}

/*
*	структура Repository - набор интерфейсов бизнес-логики
 */
type Respository struct {
	Authorization
}

/*
*	функция NewRepository - инициализация набора интерфейсов бизнес-логики
*	(db *sqlx.DB)
*	возвращает *Repository
 */
func NewRepository(db *sqlx.DB) *Respository {
	return &Respository{
		Authorization: NewAuthPostgres(db),
	}
}
