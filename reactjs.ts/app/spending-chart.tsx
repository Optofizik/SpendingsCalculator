import * as React from "react";
import { Chart } from "react-google-charts";

import { TagsService } from "./services/tags-service";
import { SpendingsService } from "./services/spendings-service";

import { Tag } from "./models/tag";
import { Spending } from "./models/spending";

interface SpendingChartState { tags: Array<Tag>, spendings: Array<Spending> }

export class SpendingChart extends React.Component<undefined, SpendingChartState> {

    private data: Array<any> = [
        ["Task", "Hours per Day"], ["Work", 11], ["Eat", 2], ["Commute", 2], ["Watch TV", 2], ["Sleep", 7]
    ];

    private tagService: TagsService = new TagsService();
    private spendingSservice: SpendingsService = new SpendingsService();

    constructor() {
        super();
        this.state = { tags: [], spendings: [] };
        this.getTagsList();
    }

    render() {

        return (
            <div>
                <div className="row form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-sm-4" htmlFor="select-mode">Select view mode:</label>
                        <div className="col-sm-8">
                            <select className="form-control" id="select-mode">
                                <option>Tag</option>
                                <option>Month</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-4" htmlFor="select-tag">Select tag:</label>
                        <div className="col-sm-8">
                            <select className="form-control" id="select-tag">
                                {
                                    this.state.tags.map((tag: Tag) => {
                                        return <option value={tag.Id} key={tag.Id.toString()} >{tag.Name}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <Chart chartType="PieChart"
                    width="100%"
                    height="400px"
                    data={this.data}
                    options={{ "title": "My Daily Activities", "pieHole": 0.4, "is3D": true }}
                    chartEvents={[
                        {
                            eventName: 'select',
                            callback(Chart) {
                                // Returns Chart so you can access props and  the ChartWrapper object from chart.wrapper
                                console.log('Selected ', Chart.chart.getSelection());
                            },
                        }
                    ]}
                />
            </div>                
       );
    }

    private getTagsList(): void {
        this.tagService.getAll().then(arr => this.setState({ tags: arr }));
    }
}