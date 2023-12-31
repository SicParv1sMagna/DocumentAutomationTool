package repository

import (
	"fmt"

	autotool "github.com/DocumentAutomationTool"
	"github.com/jmoiron/sqlx"
)

type AuthPostgres struct {
	db *sqlx.DB
}

func NewAuthPostgres(db *sqlx.DB) *AuthPostgres {
	return &AuthPostgres{db: db}
}

func (r *AuthPostgres) CreateUser(user autotool.User) (int, error) {
	var id int

	query := fmt.Sprintf("INSERT INTO %s (first_name, email, password_hash) values ($1, $2, $3) RETURNING id", usersTable)
	row := r.db.QueryRow(query, user.Name, user.Email, user.Password)

	if err := row.Scan(&id); err != nil {
		return 0, err
	}

	return id, nil
}

func (r *AuthPostgres) GetUser(email, password string) (autotool.User, error) {
	var user autotool.User
	query := fmt.Sprintf("SELECT id FROM %s WHERE email=$1 AND password_hash=$2", usersTable)
	err := r.db.Get(&user, query, email, password)

	return user, err
}
