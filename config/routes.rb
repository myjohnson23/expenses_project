Rails.application.routes.draw do

  get 'api/expense' => 'expense#list'
  get 'api/expense/:id' => 'expense#read'
  post 'api/expense' => 'expense#create'
  patch 'api/expense/:id' => 'expense#update'
  put 'api/expense/:id' => 'expense#update'
  delete 'api/expense/:id' => 'expense#delete'

end
