class ExpenseController < ApplicationController
  def list
    @expenses = Expense.all
    render json: @expenses
  end

  def create
    @expense = Expense.create( {:description => params[:description],
    :amount => params[:amount],
    :date => params[:date],
    :category => params[:category],
    :category_monthly_amount => params[:category_monthly_amount]})
    render json: @expense
  end

  def read
    @expense = Expense.find(params[:id])
    render json: @expense
  end

  def update
    @expense = Expense.find(params[:id])
    @expense.update( {:description => params[:description],
    :amount => params[:amount],
    :date => params[:date],
    :category => params[:category],
    :category_monthly_amount => params[:category_monthly_amount]})
    render json: @expense
  end

  def delete
    @expense = Expense.find(params[:id])
    @expense.delete
    render json: @expense
  end


end
