<?php

$menu = "{ 
            children: [
                    {
                        text:'Despesas',
                        expanded: true,
                        children:[
                            {
                                text:'Tipo de despesa',
                                leaf: true,
                                xtypeClass: 'tipoDespesaList'
                            },
                            {
                                text:'Listagem de depesas',
                                leaf:true,
                                xtypeClass: 'controleDespesaList'
                            },{
                                text:'Gráfico de despesas',
                                leaf:true,
                                xtypeClass: 'despesaGrafico'
                            }
                        ]
                    }
                    ,
                    {
                        text:'Ganhos',
                        expanded: true,
                        children:[
                            {
                                text:'Tipo de Ganhos',
                                leaf:true,
                                xtypeClass: 'tipoGanhoList'
                            },
                            {
                                text:'Listagem de Ganhos',
                                leaf:true,
                                xtypeClass: 'controleGanhoList'
                            },{
                                text:'Gráfico de Ganhos',
                                leaf:true,
                                xtypeClass: 'ganhoGrafico'
                            }
                        ]
                    }
                    ,
                    {
                        text:'Finanças',
                        expanded: true,
                        children:[
                            {
                                text:'Tipo de Ganhos e Despesas',
                                leaf:true,
                                xtypeClass: 'tipoDespesaGanhoList'
                            },
                            {
                                text:'Listagem de Despesas e Ganhos',
                                leaf:true,
                                xtypeClass: 'controleFinancaList'
                            }
                            ,{
                                text:'Gráfico de Finanças',
                                leaf:true,
                                xtypeClass: 'financasGrafico'
                            }
                        ]
                    }
                ]
            }";
echo $menu;
