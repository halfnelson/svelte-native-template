<page>
    <actionBar title="Autocomplete Example"></actionBar>
    <stackLayout ios:backgroundColor="#CDCECE" padding="5">
        <label text="Select country"></label>
        <radAutoCompleteTextView  hint="select country" suggestMode="Suggest" displayMode="Tokens"
            items="{items}">
            <radAutoCompleteTextView.suggestionView>
                <suggestionView suggestionViewHeight="300" />
            </radAutoCompleteTextView.suggestionView>

            <Template let:item>
                <stackLayout orientation="vertical" padding="10">
                     <label text="{item.text}" />
                </stackLayout>
            </Template>
 
        </radAutoCompleteTextView>
    </stackLayout>
</page>

<script>
    import { TokenModel } from 'nativescript-ui-autocomplete';
    import { ObservableArray } from "tns-core-modules/data/observable-array";
    import { Template } from 'svelte-native/components';
    const countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
        "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
        "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
        "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
        "Vatican City", "Chad", "China", "Chile"];

    let items = new ObservableArray();

    for (let i = 0; i < countries.length; i++) {
        items.push(new TokenModel(countries[i], undefined));
    }
</script>