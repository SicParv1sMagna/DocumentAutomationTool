package repository

import "github.com/jmoiron/sqlx"

/*
*
*	интерфейс Authorization - набор методов репозиторий
*
 */
type Authorization interface {
}

/*
*
*	структура Repository - набор интерфейсов бизнес-логики
*
 */
type Respository struct {
	Authorization
}

/*
*
*	функция NewRepository - инициализация набора интерфейсов бизнес-логики
*	(db *sqlx.DB)
*	возвращает *Repository
*
 */
func NewRepository(db *sqlx.DB) *Respository {
	return &Respository{}
}
