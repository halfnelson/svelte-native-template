<page class="page">
        <actionBar title="test">
          <stackLayout orientation="horizontal" horizontalAlignment="center">
            <image src="res://icon" style="width: 30; height: 30; vertical-align: center; margin-right: 10;" />
            <label style="font-size: 20; vertical-align: center;">
              <formattedString>
                <span text="Tabs" fontWeight="Bold" />
                <span text="Navigation" />
              </formattedString>
            </label>
          </stackLayout>
        </actionBar>
        <stackLayout>
          <label text="{activeTab}" />
          <button text="Click me!" on:tap="{ () => tabs = tabs.concat([{title: 'added', text: 'added tab'}]) }" />
          <button text="Go to last!" on:tap="{ () => activeTab = tabs.length - 1 }" />
          <gridLayout>
            <tabs bind:selectedIndex="{activeTab}">
              <tabStrip>
               {#each tabs as tab,i ((i + tab.title))}
                 <tabStripItem  title="{tab.title}"></tabStripItem>
               {/each}
              </tabStrip>
              {#each tabs as tab,i ((i + tab.title))}
                <tabContentItem>
                    <label text="{tab.text}" />
                </tabContentItem>
              {/each}
            </tabs>
          </gridLayout>
        </stackLayout>
</page>

<script>
    let activeTab = 1;
    let tabs = [
      { title: 'First Tab', text: 'im the first tab' },
      { title: 'Second Tab', text: 'im the second tab' },
      { title: 'Third Tab', text: 'im the third tab' }
    ];
</script>