import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import * as MealActions from '../../actions/MealActions'

class MealListPage extends Component {
    componentWillMount() {
        const { getMeals } = this.props.mealActions

        getMeals()
    }

    render() {
        const { meals } = this.props.meal
        const { getMeals } = this.props.mealActions

        return (
            <div>
                <h2>Приемы пищи</h2>
                <NavLink to={'/meals/new'}>Добавить прием пищи</NavLink>
                <br />
                <NavLink to={'/meals/new'}>Добавить продукт в прием пищи</NavLink>
                <br />
                <br />
                
                {
                    meals.map(function(meal) {
                        return (
                            <div>
                                {/* <span>{meal.name} | {meal.startTime} - {meal.endTime}</span> */}
                                <table style={{borderCollapse: 'separate', borderSpacing: '5px'}}>
                                    <thead>
                                        <tr>
                                            <td>{meal.name}</td>
                                            <td>{meal.startTime} - {meal.endTime}</td>
                                        </tr>
                                    </thead>
                                    <thead>
                                        <tr>
                                            <th>Продукты</th>
                                            <th>Количество</th>
                                            <th>Белки</th>
                                            <th>Жиры</th>
                                            <th>Углеводы</th>
                                            <th>Клетчатка</th>
                                            <th>Калории</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            meal.products.map(function(product) {
                                                return (
                                                    <tr>
                                                        <td>{product.product.name}</td>
                                                        <td>{product.amount}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td>Итого</td>
                                            <td>Знач</td>
                                            <td>Знач</td>
                                            <td>Знач</td>
                                            <td>Знач</td>
                                            <td>Знач</td>
                                            <td>Знач</td>
                                        </tr>
                                    </tfoot>
                                </table>                                
                                <br />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        meal: state.meal
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mealActions: bindActionCreators(MealActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealListPage)
