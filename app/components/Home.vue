<template>
    <Page>
        <ActionBar>
            <Label text="Home"/>
        </ActionBar>

		<GridLayout rows="*,auto">
            <ScrollView row="0" rowSpan="2">
            	<StackLayout>
            		<Label text="Example" />
            		<Label text="Example" />
            		<Label text="Example" />
            		<Label text="Example" />
            		<Label text="Example" />
            		<Label text="Example" />
            		<Label text="Example" />
            		<Label text="Example" />
            		<Label text="Example" />
            		<Label text="Example" />
            		<Label  :text="'fa-arrow-right' | fonticon" class="fa" color="#fff" />
            	</StackLayout>
            </ScrollView>

            <FlexboxLayout row="1" flexDirection="row-reverse">
                <MDFloatingActionButton  class="fa floating-action-button" color="#ff0000" :text="'fa-arrow-right' | fonticon"/>
            </FlexboxLayout>
        </GridLayout>
        
    </Page>
</template>

<script>
  export default {
    
  };
</script>

<style lang="scss">
	@import "~/app.scss";

    .floating-action-button {
    	color: red;
    }
</style>
