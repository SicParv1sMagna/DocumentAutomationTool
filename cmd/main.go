package main

import (
	"log"
	"os"

	autotool "github.com/DocumentAutomationTool"
	"github.com/DocumentAutomationTool/pkg/handler"
	"github.com/DocumentAutomationTool/pkg/repository"
	"github.com/DocumentAutomationTool/pkg/service"
	"github.com/joho/godotenv"
	"github.com/spf13/viper"
)

func main() {

	// Инициализация конфига.

	if err := initConfig(); err != nil {
		log.Fatalf("error initializing config: %s", err.Error())
	}

	// Загрузка переменных окружения.

	if err := godotenv.Load(); err != nil {
		log.Fatalf("error loading environment variables: %s", err)
	}

	// Инциализация базы данных.

	db, err := repository.NewPostgresDB(repository.Config{
		Host:     viper.GetString("db.host"),
		Port:     viper.GetString("db.port"),
		Username: viper.GetString("db.username"),
		Password: os.Getenv("DB_PASSWORD"),
		DBName:   viper.GetString("db.dbname"),
		SSLMode:  viper.GetString("db.sslmode"),
	})
	if err != nil {
		log.Fatalf("failed to initialize db: %s", err.Error())
	}

	// Инициализация репозиториев

	repos := repository.NewRepository(db)

	// Инициализация сервисов

	services := service.NewService(repos)

	// Инициализация обработчика запрсов

	handlers := handler.NewHandler(services)

	// Запуск сервера

	srv := new(autotool.Server)

	if err := srv.Run(viper.GetString("port"), handlers.InitRoutes()); err != nil {
		log.Fatalf("error occured while running http server: %s", err.Error())
	}
}

/*
*
*	функция initConfig() - инициализация конфига.
*	возвращает error
*
 */
func initConfig() error {
	viper.AddConfigPath("configs")
	viper.SetConfigName("config")
	return viper.ReadInConfig()
}
