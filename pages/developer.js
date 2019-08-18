import React, { Component } from 'react';
import { apiLink } from 'links';
import PageTitle from 'components/page-title';
import APITable from 'components/api-table';
import APIRow from 'components/api-row';
import { genericStrings, apiStrings } from 'static/strings';
import { twitter } from 'links/social';
import { NextSeo } from 'next-seo';

class Developer extends Component {

  render() {
    const { items } = apiLink;

    return (
      <div>
        <NextSeo
          title={apiLink.documentTitle}
          description={apiLink.documentTitle}
          openGraph={{
            url: apiLink.prodUrl,
            title: apiLink.documentTitle,
            description: apiLink.documentTitle,
          }}
        />
        <PageTitle title={apiLink.title} subtitle={apiLink.subtitle} summary={apiLink.summary} />
        <APITable responsive hover>
          <thead>
            <tr>
              <th>{apiStrings.url}</th>
              <th>{apiStrings.method}</th>
              <th>{apiStrings.description}</th>
            </tr>
          </thead>
          <tbody>
            {items.map(i => <APIRow key={i.name} item={i} isUrl={i.is_url} />)}
          </tbody>
        </APITable>
      </div> 
    );
  }

}

export default Developer;


