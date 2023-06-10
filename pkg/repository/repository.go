package repository

import "github.com/jmoiron/sqlx"

type Authorization interface {
}

type Respository struct {
	Authorization
}

func NewRepository(db *sqlx.DB) *Respository {
	return &Respository{}
}
